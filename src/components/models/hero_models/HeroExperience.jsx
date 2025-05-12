import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { TextureLoader } from "three";
import * as THREE from "three";

import HeroLights from "./HeroLights";
import Particles from "./Particles";

// ✅ Circular 3D Image Component
const CircularImage = () => {
  const texture = useLoader(TextureLoader, "/images/felix.jpg");

  return (
    <mesh position={[0, -2.2, 0]}>
      <circleGeometry args={[3.5, 128]} />
      <meshPhysicalMaterial
        map={texture}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.2}
        roughness={0.25}
        reflectivity={1}
        emissive={new THREE.Color(0x111111)}
        emissiveIntensity={0.05}
        toneMapped={false}
      />
    </mesh>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      style={{
        width: "100%",
        height: "100vh",
        background: "radial-gradient(circle at center, #0f0f2d, #000000)",
      }}
    >
      <fog attach="fog" args={["#000000", 10, 25]} />

      {/* Adjusted lights for clarity */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight
        intensity={1}
        color="#ffffff"
        position={[0, 5, 5]}
        castShadow
      />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={150} color="#00fff7" />

        {/* Move text upward to give image space */}
        <Text
          position={[0, 2.5, 0]} // Lowered
          fontSize={1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          FELIXBEST
        </Text>

        <Text
          position={[0, 1.7, 0]} // Lowered
          fontSize={0.5}
          color="#ff0080"
          anchorX="center"
          anchorY="middle"
        >
          ELFENOMENO
        </Text>

        <Text
          position={[0, 3.1, 0]}
          fontSize={0.5}
          color="#ff0080"
          anchorX="center"
          anchorY="middle"
        >
          ELFENOMENO
        </Text>

        {/* Big Circular Image with improved lighting */}
        <CircularImage />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
