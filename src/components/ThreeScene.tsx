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

    setTimeout(() => {
      Globe.arcsData(lines.pulls)
        .arcColor((e) => (e.status ? "#9cff00" : "#ff4000"))
        .arcAltitude((e) => e.arcAlt)
        .arcStroke((e) => (e.status ? 0.5 : 0.3))
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashAnimateTime(1000)
        .arcsTransitionDuration(1000)
        .arcDashInitialGap((e) => e.order * 1)
        .labelsData(map.maps)
        .labelColor(() => "#ffcb21")
        .labelDotRadius(0.3)
        .labelSize((e) => e.size || 1.0)
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

// "use client";

// import { useEffect, useRef } from "react";

// import * as THREE from "three";
// import ThreeGlobe from "three-globe";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// import countries from "../constants/globe-data/custom.geo.json";
// import lines from "../constants/globe-data/lines.json";
// import map from "../constants/globe-data/map.json";

// export default function ThreeGlobeScene() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Check if window is defined safely
//   const isMobile =
//     typeof window !== "undefined" ? window.innerWidth < 768 : false;

//   useEffect(() => {
//     // Debug logging
//     console.log("Component mounted");

//     if (!containerRef.current) {
//       console.error("Container ref is null");
//       return;
//     }

//     // Optional: Verify that data files are loaded correctly
//     console.log("Countries data:", countries ? "Loaded" : "Missing");
//     console.log("Lines data:", lines ? "Loaded" : "Missing");
//     console.log("Map data:", map ? "Loaded" : "Missing");

//     try {
//       // Data validation
//       map.maps = map.maps.map((p, i) => {
//         const lat = Number(p.lat);
//         const lng = Number(p.lng);
//         if (isNaN(lat) || isNaN(lng)) {
//           console.warn(`Invalid map point at index ${i}`, p);
//         }
//         return { ...p, lat, lng };
//       });

//       lines.pulls = lines.pulls.map((p, i) => {
//         const startLat = Number(p.startLat);
//         const startLng = Number(p.startLng);
//         const endLat = Number(p.endLat);
//         const endLng = Number(p.endLng);
//         if ([startLat, startLng, endLat, endLng].some(isNaN)) {
//           console.warn(`Invalid arc at index ${i}`, p);
//         }
//         return { ...p, startLat, startLng, endLat, endLng };
//       });
//     } catch (error) {
//       console.error("Error processing map data:", error);
//     }

//     // Getting container dimensions
//     const container = containerRef.current;
//     const width = container.offsetWidth;
//     const height = container.offsetHeight;

//     console.log("Container dimensions:", width, height);

//     // Renderer setup
//     try {
//       const renderer = new THREE.WebGLRenderer({ antialias: true });
//       renderer.setPixelRatio(window.devicePixelRatio);
//       renderer.setSize(width, height);
//       container.appendChild(renderer.domElement);

//       // Scene setup
//       const scene = new THREE.Scene();
//       scene.background = new THREE.Color(0x040d21);
//       scene.fog = new THREE.Fog(0x535ef3, 400, 2000);

//       // Camera setup
//       const camera = new THREE.PerspectiveCamera();
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       camera.position.z = 800; // Adjusted distance to match scale

//       // Move camera position to look at the top part of the container
//       camera.position.y = height * 0.6;

//       console.log("Camera position:", camera.position);

//       // Lights setup
//       const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.3);
//       scene.add(ambientLight);

//       const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
//       dLight.position.set(-800, 2000, 400);
//       camera.add(dLight);
//       scene.add(camera);

//       // Controls setup
//       const controls = new OrbitControls(camera, renderer.domElement);
//       controls.enableDamping = true;
//       controls.dampingFactor = 0.01;
//       controls.enablePan = false;
//       controls.minDistance = 200;
//       controls.maxDistance = 500;
//       controls.autoRotate = true;
//       controls.autoRotateSpeed = 0.6;
//       // Set the orbit controls target to the globe's position
//       controls.target.set(0, height * 0.33, 0);
//       controls.update();

//       try {
//         console.log("Creating globe");
//         // Create the globe - following original exactly
//         const Globe = new ThreeGlobe({
//           waitForGlobeReady: true,
//           animateIn: true,
//         })
//           .hexPolygonsData(countries.features)
//           .hexPolygonResolution(isMobile ? 2 : 3)
//           .hexPolygonMargin(isMobile ? 1 : 0.7)
//           .showAtmosphere(true)
//           .atmosphereColor("#3a228a")
//           .atmosphereAltitude(0.25);

//         console.log("Globe created");

//         // Add arcs data with delay
//         setTimeout(() => {
//           console.log("Adding arcs data");
//           try {
//             Globe.arcsData(lines.pulls)
//               .arcColor((e) => (e.status ? "#9cff00" : "#ff4000"))
//               .arcAltitude((e) => e.arcAlt)
//               .arcStroke((e) => (e.status ? 0.5 : 0.3))
//               .arcDashLength(0.9)
//               .arcDashGap(4)
//               .arcDashAnimateTime(1000)
//               .arcsTransitionDuration(1000)
//               .arcDashInitialGap((e) => e.order * 1)
//               .labelsData(map.maps)
//               .labelColor(() => "#ffcb21")
//               .labelDotRadius(0.3)
//               .labelSize((e) => e.size || 1.0)
//               .labelText("city")
//               .labelResolution(6)
//               .labelAltitude(0.01)
//               .pointsData(map.maps)
//               .pointColor(() => "#fff")
//               .pointsMerge(true)
//               .pointAltitude(0.07)
//               .pointRadius(0.05);
//             console.log("Arcs data added successfully");
//           } catch (error) {
//             console.error("Error adding arcs data:", error);
//           }
//         }, 1000);

//         // FIXED: Apply rotation first, then scaling, then position
//         // Order matters for maintaining proper rotation center

//         // Setting rotation
//         Globe.rotation.y = -Math.PI * (5 / 9);
//         Globe.rotation.z = -Math.PI / 6;

//         try {
//           const globeMaterial =
//             Globe.globeMaterial() as THREE.MeshPhongMaterial;
//           globeMaterial.color = new THREE.Color(0x3a228a);
//           globeMaterial.emissive = new THREE.Color(0x220038);
//           globeMaterial.emissiveIntensity = 0.1;
//           globeMaterial.shininess = 0.7;
//         } catch (error) {
//           console.error("Error setting globe material:", error);
//         }

//         // Apply scale after rotation (reduced by 30% from original 0.2)
//         Globe.scale.set(0.14, 0.14, 0.14);

//         // Position at the top center of the container
//         // In Three.js, positive y moves upward
//         Globe.position.set(0, height * 0.33, 0);

//         // Critical: Add globe to scene
//         scene.add(Globe);
//         console.log("Globe added to scene");
//       } catch (error) {
//         console.error("Error creating globe:", error);
//       }

//       // Animation loop
//       const animate = () => {
//         requestAnimationFrame(animate);
//         controls.update();
//         renderer.render(scene, camera);
//       };

//       console.log("Starting animation loop");
//       animate();

//       // Handle window resize
//       const handleResize = () => {
//         if (containerRef.current) {
//           const width = containerRef.current.offsetWidth;
//           const height = containerRef.current.offsetHeight;

//           camera.aspect = width / height;
//           camera.updateProjectionMatrix();
//           renderer.setSize(width, height);
//         }
//       };

//       window.addEventListener("resize", handleResize);

//       return () => {
//         console.log("Cleanup");
//         window.removeEventListener("resize", handleResize);
//         if (container && renderer) {
//           container.removeChild(renderer.domElement);
//         }
//       };
//     } catch (error) {
//       console.error("Error in main setup:", error);
//     }
//   }, []);

//   return <div className="w-full h-full" ref={containerRef} />;
// }
