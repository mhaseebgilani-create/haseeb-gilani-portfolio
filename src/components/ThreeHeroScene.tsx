import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroSceneProps {
  className?: string;
}

export const ThreeHeroScene: React.FC<ThreeHeroSceneProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x17191C, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 18;

    // WebGL Renderer
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      mount.appendChild(renderer.domElement);
    } catch {
      return; // WebGL not supported, graceful exit
    }

    // Industrial Lighting setup
    const ambientLight = new THREE.AmbientLight(0x22262C, 2.5);
    scene.add(ambientLight);

    // Coral orange directional & accent rim light
    const coralLight = new THREE.PointLight(0xFF4B32, 4.0, 35);
    coralLight.position.set(10, 8, 8);
    scene.add(coralLight);

    // Cool metallic fill light
    const coolLight = new THREE.DirectionalLight(0x929DA7, 2.0);
    coolLight.position.set(-10, -5, 12);
    scene.add(coolLight);

    // Group for rotating metallic objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central floating metallic architectural ring / torus knot
    const torusKnotGeo = new THREE.TorusKnotGeometry(3.2, 0.65, 120, 24, 2, 3);
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x2A2E35,
      metalness: 0.9,
      roughness: 0.28,
      wireframe: false,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, metalMaterial);
    torusKnot.position.set(4, 0, -2);
    group.add(torusKnot);

    // 2. Wireframe architectural outer gyro ring
    const ringGeo = new THREE.TorusGeometry(5.2, 0.05, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x929DA7,
      transparent: true,
      opacity: 0.25,
      wireframe: true
    });
    const gyroRing1 = new THREE.Mesh(ringGeo, ringMat);
    gyroRing1.position.copy(torusKnot.position);
    gyroRing1.rotation.x = Math.PI / 3;
    group.add(gyroRing1);

    const ringGeo2 = new THREE.TorusGeometry(6.4, 0.04, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xFF4B32,
      transparent: true,
      opacity: 0.35,
      wireframe: false
    });
    const gyroRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    gyroRing2.position.copy(torusKnot.position);
    gyroRing2.rotation.y = Math.PI / 4;
    group.add(gyroRing2);

    // 3. Floating geometric nodes (Industrial nodes representing connection points)
    const nodeGeo = new THREE.IcosahedronGeometry(0.5, 0);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xFF4B32,
      metalness: 0.8,
      roughness: 0.3,
      emissive: 0xFF4B32,
      emissiveIntensity: 0.2
    });

    const nodesCount = 18;
    const nodesGroup = new THREE.Group();
    for (let i = 0; i < nodesCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodesCount) * Math.PI * 2;
      const radius = 6 + Math.sin(i * 1.5) * 2;
      mesh.position.set(
        4 + Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.7,
        (Math.sin(i * 2) - 0.5) * 4 - 2
      );
      const scale = 0.25 + Math.random() * 0.35;
      mesh.scale.set(scale, scale, scale);
      nodesGroup.add(mesh);
    }
    group.add(nodesGroup);

    // 4. Subtle 3D particle field for depth
    const particlesCount = 350;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 35;
      posArray[i + 1] = (Math.random() - 0.5) * 25;
      posArray[i + 2] = (Math.random() - 0.5) * 20;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.065,
      color: 0x929DA7,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Mouse tracking for parallax interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window resize
    const handleResize = () => {
      if (!mount || !renderer) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth mouse damping
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Rotate metallic structures
        torusKnot.rotation.x = elapsedTime * 0.25;
        torusKnot.rotation.y = elapsedTime * 0.35;
        torusKnot.rotation.z += 0.002;

        gyroRing1.rotation.x = elapsedTime * 0.15 + targetY * 0.4;
        gyroRing1.rotation.y = elapsedTime * 0.18 + targetX * 0.4;

        gyroRing2.rotation.z = -elapsedTime * 0.22;
        gyroRing2.rotation.x = -elapsedTime * 0.12;

        nodesGroup.rotation.y = -elapsedTime * 0.08;

        particlesMesh.rotation.y = -elapsedTime * 0.02;

        // Subtle camera response to cursor
        camera.position.x = targetX * 1.5;
        camera.position.y = -targetY * 1.2;
        camera.lookAt(2, 0, -2);
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (mount && renderer?.domElement) {
        mount.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      torusKnotGeo.dispose();
      metalMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
