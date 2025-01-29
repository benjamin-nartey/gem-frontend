"use client";

export default function Video() {
  return (
    <video
      className="absolute top-0 -z-10 w-full h-full object-cover"
      muted
      autoPlay
      loop
    >
      <source src="church-demo.mp4" />
    </video>
  );
}
