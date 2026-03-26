import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const FloatingParticles = ({ count = 1000 }) => {
  const points = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#f27d26"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const AbstractShapes = () => {
  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[5, 2, -5]}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshStandardMaterial color="#f27d26" wireframe opacity={0.1} transparent />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-6, -3, -8]}>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#ffffff" wireframe opacity={0.05} transparent />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[0, -5, -10]}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshStandardMaterial color="#f27d26" wireframe opacity={0.03} transparent />
        </mesh>
      </Float>
    </group>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f27d26" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingParticles />
        <AbstractShapes />
        
        <fog attach="fog" args={['#050505', 5, 25]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
