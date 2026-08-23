"use client";

import { useRef } from "react";

const nodes = [
  { label: "React", className: "scene-node scene-node-react" },
  { label: "TypeScript", className: "scene-node scene-node-typescript" },
  { label: "Node.js", className: "scene-node scene-node-node" },
  { label: "SQL", className: "scene-node scene-node-sql" },
];

export function HeroScene() {
  const stageRef = useRef<HTMLDivElement>(null);

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
      <div className="hero-grid-plane" />
      <div className="hero-world">
        <div className="scene-orbit scene-orbit-one" />
        <div className="scene-orbit scene-orbit-two" />
        <div className="scene-orbit scene-orbit-three" />
        <div className="scene-core-shell">
          <div className="scene-core">
            <span>JS</span>
          </div>
        </div>
        {nodes.map((node) => (
          <div key={node.label} className={node.className}>
            <span className="scene-node-dot" />
            {node.label}
          </div>
        ))}
        <div className="scene-axis scene-axis-x" />
        <div className="scene-axis scene-axis-y" />
      </div>
      <p className="scene-caption">FULL STACK / CLOUD / DATA</p>
    </div>
  );
}
