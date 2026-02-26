import { useRef, useEffect, useState, useCallback } from "react";
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiExpress,
  SiPostgresql, SiHtml5, SiCss3, SiTailwindcss, SiPython,
  SiGit, SiLinux, SiFigma, SiVite, SiPostman,
  SiZod,
} from "react-icons/si";
import { IconType } from "react-icons";
import { Move, Database, Globe, Webhook, Clock, LayoutGrid, Monitor, Code2 } from "lucide-react";

interface SkillNode {
  label: string;
  icon: IconType | null;
  lucideIcon?: typeof Database;
  color: string;
  orbit: number;
  angle: number;
  floatOffset: number;
  floatSpeed: number;
}

const skillNodes: SkillNode[] = [
  { label: "React", icon: SiReact, color: "#61DAFB", orbit: 1, angle: 0, floatOffset: 0, floatSpeed: 0.8 },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6", orbit: 1, angle: 60, floatOffset: 1.2, floatSpeed: 0.7 },
  { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E", orbit: 1, angle: 120, floatOffset: 2.4, floatSpeed: 0.9 },
  { label: "Node.js", icon: SiNodedotjs, color: "#339933", orbit: 1, angle: 180, floatOffset: 0.6, floatSpeed: 0.75 },
  { label: "Express", icon: SiExpress, color: "#8899AA", orbit: 1, angle: 240, floatOffset: 1.8, floatSpeed: 0.85 },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", orbit: 1, angle: 300, floatOffset: 3.0, floatSpeed: 0.65 },

  { label: "HTML5", icon: SiHtml5, color: "#E34F26", orbit: 2, angle: 20, floatOffset: 0.3, floatSpeed: 0.6 },
  { label: "CSS3", icon: SiCss3, color: "#1572B6", orbit: 2, angle: 65, floatOffset: 1.5, floatSpeed: 0.7 },
  { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", orbit: 2, angle: 110, floatOffset: 2.7, floatSpeed: 0.55 },
  { label: "Python", icon: SiPython, color: "#3776AB", orbit: 2, angle: 155, floatOffset: 0.9, floatSpeed: 0.8 },
  { label: "Git", icon: SiGit, color: "#F05032", orbit: 2, angle: 200, floatOffset: 2.1, floatSpeed: 0.65 },
  { label: "Linux", icon: SiLinux, color: "#FCC624", orbit: 2, angle: 245, floatOffset: 3.3, floatSpeed: 0.75 },
  { label: "Figma", icon: SiFigma, color: "#F24E1E", orbit: 2, angle: 290, floatOffset: 1.0, floatSpeed: 0.9 },
  { label: "SQL", icon: null, lucideIcon: Database, color: "#4FC3F7", orbit: 2, angle: 335, floatOffset: 2.0, floatSpeed: 0.6 },

  { label: "REST APIs", icon: null, lucideIcon: Globe, color: "#66BB6A", orbit: 3, angle: 15, floatOffset: 0.5, floatSpeed: 0.5 },
  { label: "Vite", icon: SiVite, color: "#646CFF", orbit: 3, angle: 55, floatOffset: 1.7, floatSpeed: 0.6 },
  { label: "Zod", icon: SiZod, color: "#3068B7", orbit: 3, angle: 95, floatOffset: 2.9, floatSpeed: 0.55 },
  { label: "Postman", icon: SiPostman, color: "#FF6C37", orbit: 3, angle: 135, floatOffset: 0.2, floatSpeed: 0.7 },
  { label: "Webhooks", icon: null, lucideIcon: Webhook, color: "#AB47BC", orbit: 3, angle: 175, floatOffset: 1.4, floatSpeed: 0.65 },
  { label: "Cron Jobs", icon: null, lucideIcon: Clock, color: "#78909C", orbit: 3, angle: 215, floatOffset: 2.6, floatSpeed: 0.5 },
  { label: "Data Modeling", icon: null, lucideIcon: LayoutGrid, color: "#26A69A", orbit: 3, angle: 255, floatOffset: 3.1, floatSpeed: 0.75 },
  { label: "Responsive", icon: null, lucideIcon: Monitor, color: "#EF5350", orbit: 3, angle: 295, floatOffset: 0.8, floatSpeed: 0.6 },
  { label: "VS Code", icon: null, lucideIcon: Code2, color: "#007ACC", orbit: 3, angle: 335, floatOffset: 1.9, floatSpeed: 0.55 },
];

const CONNECTION_DISTANCE = 160;

function getNodePosition(
  node: SkillNode,
  centerX: number,
  centerY: number,
  orbitRadii: number[],
  dragOffsetAngle: number,
  time: number
): { x: number; y: number } {
  const baseAngle = (node.angle + dragOffsetAngle) * (Math.PI / 180);
  const floatAngle = time * node.floatSpeed + node.floatOffset;
  const floatDist = 3 + Math.sin(floatAngle) * 4;
  const radius = orbitRadii[node.orbit - 1] + floatDist;
  return {
    x: centerX + Math.cos(baseAngle) * radius,
    y: centerY + Math.sin(baseAngle) * radius,
  };
}

export default function SkillsGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const dragAngleRef = useRef(0);
  const dragStartRef = useRef<{ x: number; startAngle: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 700, height: 500 });
  const [isMobile, setIsMobile] = useState(false);
  const timeRef = useRef(0);
  const lastFrameRef = useRef(0);
  const nodeElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        const mobile = w < 640;
        setIsMobile(mobile);
        const h = mobile ? Math.min(w * 0.9, 420) : Math.min(520, w * 0.72);
        setCanvasSize({ width: w, height: h });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getOrbitRadii = useCallback(() => {
    const minDim = Math.min(canvasSize.width, canvasSize.height);
    if (isMobile) {
      return [minDim * 0.15, minDim * 0.28, minDim * 0.40];
    }
    return [minDim * 0.16, minDim * 0.30, minDim * 0.43];
  }, [canvasSize, isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasSize.width * dpr;
    canvas.height = canvasSize.height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height / 2;
    const orbitRadii = getOrbitRadii();

    function draw(timestamp: number) {
      if (!ctx) return;
      const delta = (timestamp - lastFrameRef.current) / 1000;
      lastFrameRef.current = timestamp;
      timeRef.current += delta;
      const time = timeRef.current;

      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

      orbitRadii.forEach((r) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 35);
      centerGlow.addColorStop(0, "rgba(56, 152, 184, 0.4)");
      centerGlow.addColorStop(0.4, "rgba(56, 152, 184, 0.12)");
      centerGlow.addColorStop(1, "rgba(56, 152, 184, 0)");
      ctx.beginPath();
      ctx.arc(centerX, centerY, 35, 0, Math.PI * 2);
      ctx.fillStyle = centerGlow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 7, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56, 152, 184, 0.85)";
      ctx.fill();

      const positions = skillNodes.map((node) =>
        getNodePosition(node, centerX, centerY, orbitRadii, dragAngleRef.current, time)
      );

      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const dx = positions[i].x - positions[j].x;
          const dy = positions[i].y - positions[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15;
            ctx.beginPath();
            ctx.moveTo(positions[i].x, positions[i].y);
            ctx.lineTo(positions[j].x, positions[j].y);
            ctx.strokeStyle = `rgba(56, 152, 184, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      positions.forEach((pos, i) => {
        const el = nodeElementsRef.current[i];
        if (el) {
          el.style.left = `${pos.x}px`;
          el.style.top = `${pos.y}px`;
        }
      });

      animFrameRef.current = requestAnimationFrame(draw);
    }

    lastFrameRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [canvasSize, isMobile, getOrbitRadii]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragStartRef.current = { x: e.clientX, startAngle: dragAngleRef.current };
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragStartRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const sensitivity = 0.3;
    dragAngleRef.current = dragStartRef.current.startAngle + dx * sensitivity;
  }, []);

  const handlePointerUp = useCallback(() => {
    dragStartRef.current = null;
    setIsDragging(false);
  }, []);

  const nodeSize = isMobile ? 18 : 24;
  const iconSize = isMobile ? 12 : 16;
  const labelFontSize = isMobile ? "8px" : "10px";

  return (
    <div ref={containerRef} className="w-full" data-testid="skills-graph">
      <div
        className="relative select-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: canvasSize.width,
            height: canvasSize.height,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          data-testid="skills-canvas"
        />
        {skillNodes.map((node, i) => {
          const IconComponent = node.icon;
          const LucideIcon = node.lucideIcon;
          return (
            <div
              key={node.label}
              ref={(el) => { nodeElementsRef.current[i] = el; }}
              className="absolute pointer-events-none flex flex-col items-center"
              style={{
                left: 0,
                top: 0,
                transform: "translate(-50%, -50%)",
              }}
              data-testid={`skill-node-${node.label.toLowerCase().replace(/[\s/.]/g, "-")}`}
            >
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: nodeSize * 2,
                  height: nodeSize * 2,
                  background: "rgba(14, 16, 20, 0.85)",
                  border: `1.5px solid ${node.color}40`,
                  boxShadow: `0 0 12px ${node.color}15`,
                }}
              >
                {IconComponent ? (
                  <IconComponent size={iconSize} color={node.color} />
                ) : LucideIcon ? (
                  <LucideIcon
                    style={{ width: iconSize, height: iconSize, color: node.color }}
                  />
                ) : null}
              </div>
              <span
                className="font-mono mt-1 whitespace-nowrap"
                style={{
                  fontSize: labelFontSize,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {node.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-[12px] font-mono" data-testid="skills-drag-hint">
        <Move className="w-3.5 h-3.5" />
        <span>Drag to explore skills universe</span>
      </div>
    </div>
  );
}
