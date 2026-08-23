"use client";

import { useEffect, useRef } from "react";

const layers = [
  {
    index: "01",
    title: "Frontend",
    detail: "React · TypeScript",
    className: "scene-layer-card scene-layer-frontend",
  },
  {
    index: "02",
    title: "API",
    detail: "Node · GraphQL",
    className: "scene-layer-card scene-layer-api",
  },
  {
    index: "03",
    title: "Data",
    detail: "SQL · MongoDB",
    className: "scene-layer-card scene-layer-data",
  },
  {
    index: "04",
    title: "Delivery",
    detail: "Docker · CI/CD",
    className: "scene-layer-card scene-layer-delivery",
  },
];

const particleCount = 14;

export function HeroScene() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const compactLayout = window.matchMedia("(max-width: 639px)");
    let animationFrame = 0;

    function updateScrollDepth() {
      const stage = stageRef.current;
      if (!stage) return;

      if (reducedMotion.matches || compactLayout.matches) {
        stage.style.setProperty("--scene-scroll-near", "0px");
        stage.style.setProperty("--scene-scroll-far", "0px");
        return;
      }

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const bounds = stage.getBoundingClientRect();
        const stageCentre = bounds.top + bounds.height / 2;
        const viewportCentre = window.innerHeight / 2;
        const progress = Math.max(
          -1,
          Math.min(1, (viewportCentre - stageCentre) / window.innerHeight),
        );

        stage.style.setProperty("--scene-scroll-near", `${progress * 34}px`);
        stage.style.setProperty("--scene-scroll-far", `${progress * -18}px`);
      });
    }

    updateScrollDepth();
    window.addEventListener("scroll", updateScrollDepth, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateScrollDepth);
    };
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    if (!stage || event.pointerType === "touch") return;

    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    stage.style.setProperty("--scene-rotate-x", `${-y * 12}deg`);
    stage.style.setProperty("--scene-rotate-y", `${x * 16}deg`);
    stage.style.setProperty("--scene-light-x", `${(x + 0.5) * 100}%`);
    stage.style.setProperty("--scene-light-y", `${(y + 0.5) * 100}%`);
  }

  function resetScene() {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--scene-rotate-x", "-4deg");
    stage.style.setProperty("--scene-rotate-y", "8deg");
    stage.style.setProperty("--scene-light-x", "55%");
    stage.style.setProperty("--scene-light-y", "40%");
  }

  return (
    <div
      ref={stageRef}
      className="hero-stage"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetScene}
    >
      <div className="scene-particles">
        {Array.from({ length: particleCount }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="hero-grid-plane" />
      <div className="hero-world">
        <svg
          className="scene-system-map"
          viewBox="0 0 600 420"
          fill="none"
          aria-hidden="true"
        >
          <path d="M292 205C238 158 197 118 124 90" />
          <path d="M308 205C368 153 416 119 491 92" />
          <path d="M311 222C371 264 423 298 495 329" />
          <path d="M289 222C233 269 190 301 113 330" />
        </svg>
        <div className="scene-orbit scene-orbit-one" />
        <div className="scene-orbit scene-orbit-two" />
        <div className="scene-orbit scene-orbit-three" />
        <div className="scene-core-shell">
          <div className="scene-core">
            <span>JS</span>
          </div>
        </div>
        {layers.map((layer) => (
          <div key={layer.title} className={layer.className}>
            <div className="scene-layer-heading">
              <span className="scene-layer-index">{layer.index}</span>
              <span className="scene-layer-status">
                <span /> live
              </span>
            </div>
            <strong>{layer.title}</strong>
            <p>{layer.detail}</p>
          </div>
        ))}
        <div className="scene-axis scene-axis-x" />
        <div className="scene-axis scene-axis-y" />
      </div>
      <p className="scene-caption">SYSTEM ARCHITECTURE / 04 LAYERS</p>
    </div>
  );
}
