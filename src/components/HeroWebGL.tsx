"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroWebGL() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Core Setup
    const container = mountRef.current;
    const scene = new THREE.Scene();
    // REMOVED: scene.background = new THREE.Color("#050505");
    // We leave the scene background transparent now so the CSS glow shows through

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true, // ADDED: This makes the WebGL canvas transparent
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // Group to hold everything so we can gently tilt and translate it all together
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // 2. Main Asset Loading
    const textureLoader = new THREE.TextureLoader();
    const sphereTexture = textureLoader.load(
      "/assets/renders/geniflow-data-sphere.png",
    );

    const sphereMat = new THREE.SpriteMaterial({
      map: sphereTexture,
      color: 0xffffff,
    });
    const sphereSprite = new THREE.Sprite(sphereMat);

    const calculateSphereScale = () =>
      Math.min(container.clientWidth * 0.045, 35);
    const initialScale = calculateSphereScale();
    sphereSprite.scale.set(initialScale, initialScale, 1);
    sceneGroup.add(sphereSprite);

    // 3. Particle Initialization (These will act like the stars in your image!)
    const particlesCount = 400;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    const originalPositions = new Float32Array(particlesCount * 3);

    const particleOrbitRadius = initialScale / 2 + 2;

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const radius = particleOrbitRadius + (Math.random() - 0.5) * 2.5;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;

      originalPositions[i] = x;
      originalPositions[i + 1] = y;
      originalPositions[i + 2] = z;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.12,
      color: "#F1F6F4",
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    sceneGroup.add(particleMesh);

    // 4. Subtle Interaction Tracking
    const mouse = new THREE.Vector2(0, 0);
    let isHovering = false;

    const onPointerMove = (event: PointerEvent) => {
      isHovering = true;
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onPointerLeave = () => {
      isHovering = false;
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerleave", onPointerLeave);

    // 5. Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const tick = () => {
      const time = clock.getElapsedTime();

      // Gentle internal rotation
      particleMesh.rotation.z = time * 0.05;
      particleMesh.rotation.y = time * 0.03;
      sphereSprite.rotation.z = time * 0.05;

      // Gentle, organic floating effect for individual particles
      const positions = particlesGeometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] =
          originalPositions[i] + Math.sin(time + originalPositions[i]) * 0.1;
        positions[i + 1] =
          originalPositions[i + 1] +
          Math.cos(time + originalPositions[i + 1]) * 0.1;
        positions[i + 2] =
          originalPositions[i + 2] +
          Math.sin(time + originalPositions[i + 2]) * 0.1;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Parallax Translation (Scrolling with cursor)
      const targetPosX = isHovering ? mouse.x * 2.5 : 0;
      const targetPosY = isHovering ? mouse.y * 2.5 : 0;

      sceneGroup.position.x += (targetPosX - sceneGroup.position.x) * 0.05;
      sceneGroup.position.y += (targetPosY - sceneGroup.position.y) * 0.05;

      // Subtle Parallax Rotation (Tilting based on mouse)
      const targetRotationX = isHovering ? mouse.y * Math.PI * 0.03 : 0;
      const targetRotationY = isHovering ? mouse.x * Math.PI * 0.03 : 0;

      sceneGroup.rotation.x += (targetRotationX - sceneGroup.rotation.x) * 0.05;
      sceneGroup.rotation.y += (targetRotationY - sceneGroup.rotation.y) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // 6. Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      const newScale = calculateSphereScale();
      sphereSprite.scale.set(newScale, newScale, 1);
    };

    window.addEventListener("resize", handleResize);

    // 7. Strict Memory Management
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(animationFrameId);
      if (container) container.removeChild(renderer.domElement);

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      sphereMat.dispose();
      sphereTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 70% at 50% 110%, rgb(17, 76, 90) 0%, rgb(17, 76, 90) 45%, #050505 100%)",
      }}
    />
  );
}
