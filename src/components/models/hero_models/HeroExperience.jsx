import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { TextureLoader } from "three";
import * as THREE from "three";

import HeroLights from "./HeroLights";
import Particles from "./Particles";

// ✅ Circular 3D Image Component
const CircularImage = ({ scale, position }) => {
  const texture = useLoader(TextureLoader, "/images/felix.jpg");

  return (
    <mesh position={position}>
      <circleGeometry args={[3.5 * scale, 128]} />
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

  // Adjust values based on screen size
  const scale = isMobile ? 0.5 : isTablet ? 0.75 : 1;
  const fov = isMobile ? 35 : isTablet ? 42 : 45;
  const textFontSize = isMobile ? 0.4 : 0.5;
  const mainTextFontSize = isMobile ? 0.8 : 1;
  const imagePosition = isMobile ? [0, -2.5, 0] : [0, -2.2, 0];

  const textContent = ["FELIXBEST", "ELFENOMENO"];

  return (
    <section className="overflow-x-hidden">
      <Canvas
        camera={{ position: [0, 0, 15], fov }}
        style={{
          width: "100%",
          height: "100vh",
          background: "radial-gradient(circle at center, #0f0f2d, #000000)",
        }}
      >
        <fog attach="fog" args={["#000000", 10, 25]} />

        {/* Lighting */}
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

          {/* Main Text */}
          <Text
            position={[0, 2.5, 0]}
            fontSize={mainTextFontSize}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {textContent[0]}
          </Text>

          {/* Sub Text */}
          {textContent.slice(1).map((text, index) => (
            <Text
              key={index}
              position={[0, 1.7 - index * 0.6, 0]}
              fontSize={textFontSize}
              color="#ff0080"
              anchorX="center"
              anchorY="middle"
            >
              {text}
            </Text>
          ))}

          {/* Circular Image */}
          <CircularImage scale={scale} position={imagePosition} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default HeroExperience;