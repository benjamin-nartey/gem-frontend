"use client";

import dynamic from "next/dynamic";

const ThreeGlobeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
});

export default function ThreeGlobeDynamicImport() {
  return <ThreeGlobeScene />;
}
