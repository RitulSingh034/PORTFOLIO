
import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";

function FloatingObject() {
  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh>
        <icosahedronGeometry args={[1.35, 4]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          roughness={0.15}
          metalness={0.8}
          distort={0.35}
          speed={2}
        />
      </mesh>

      <mesh rotation={[1, 0.5, 0]}>
        <torusGeometry args={[1.8, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[3, 3, 3]} intensity={3} color="#a78bfa" />
        <pointLight position={[-3, -2, 2]} intensity={2} color="#38bdf8" />

        <Stars
          radius={80}
          depth={40}
          count={1200}
          factor={3}
          fade
        />

        <FloatingObject />
      </Canvas>
    </div>
  );
}

