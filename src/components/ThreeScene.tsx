"use client";

import { useEffect, useRef } from "react";

import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import countries from "../constants/globe-data/custom.geo.json";
import lines from "../constants/globe-data/lines.json";
import map from "../constants/globe-data/map.json";

const isMobile = window.innerWidth < 768;

export default function ThreeGlobeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    map.maps = map.maps.map((p, i) => {
      const lat = Number(p.lat);
      const lng = Number(p.lng);
      if (isNaN(lat) || isNaN(lng)) {
        console.warn(`Invalid map point at index ${i}`, p);
      }
      return { ...p, lat, lng };
    });

    lines.pulls = lines.pulls.map((p, i) => {
      const startLat = Number(p.startLat);
      const startLng = Number(p.startLng);
      const endLat = Number(p.endLat);
      const endLng = Number(p.endLng);
      if ([startLat, startLng, endLat, endLng].some(isNaN)) {
        console.warn(`Invalid arc at index ${i}`, p);
      }
      return { ...p, startLat, startLng, endLat, endLng };
    });

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040d21);
    scene.fog = new THREE.Fog(0x535ef3, 400, 2000);

    const camera = new THREE.PerspectiveCamera();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    camera.position.z = 2000;

    const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.3);
    scene.add(ambientLight);

    const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dLight.position.set(-800, 2000, 400);
    camera.add(dLight);
    scene.add(camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.01;
    controls.enablePan = false;
    controls.minDistance = 200;
    controls.maxDistance = 500;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;

    controls.target.set(0, 0, 0);
    controls.update();

    const Globe = new ThreeGlobe({ waitForGlobeReady: true, animateIn: true })
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(isMobile ? 2 : 3)
      .hexPolygonMargin(isMobile ? 1 : 0.7)
      .showAtmosphere(true)
      .atmosphereColor("#3a228a")
      .atmosphereAltitude(0.25);

    type ArcData = {
      startLat: number;
      startLng: number;
      endLat: number;
      endLng: number;
      arcAlt: number;
      status: boolean;
      order?: number;
    };

    setTimeout(() => {
      Globe.arcsData(lines.pulls)
        .arcColor(((e) => ((e as ArcData).status ? "#9cff00" : "#ff4000")) as (
          obj: object
        ) => string)
        .arcAltitude(
          ((e) => (e as ArcData).arcAlt) as (obj: object) => number | null
        )
        .arcStroke(((e) => ((e as ArcData).status ? 0.5 : 0.3)) as (
          obj: object
        ) => number | null)
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashAnimateTime(1000)
        .arcsTransitionDuration(1000)
        .arcDashInitialGap(
          ((e) => ((e as ArcData).order ?? 0) * 1) as (obj: object) => number
        )
        .labelsData(map.maps)
        .labelColor(() => "#ffcb21")
        .labelDotRadius(0.3)
        .labelSize((e: { size?: number }) => e.size || 1.0)
        .labelText("city")
        .labelResolution(6)
        .labelAltitude(0.01)
        .pointsData(map.maps)
        .pointColor(() => "#fff")
        .pointsMerge(true)
        .pointAltitude(0.07)
        .pointRadius(0.05);
    }, 1000);

    Globe.rotateY(-Math.PI * (5 / 9));
    Globe.rotateZ(-Math.PI / 6);

    const globeMaterial = Globe.globeMaterial() as THREE.MeshPhongMaterial;
    globeMaterial.color = new THREE.Color(0x3a228a);
    globeMaterial.emissive = new THREE.Color(0x220038);
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.7;
    Globe.scale.set(0.2, 0.2, 0.2);
    Globe.position.set(0, 100, 0);

    scene.add(Globe);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (container && renderer) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="w-full h-full" ref={containerRef} />;
}
