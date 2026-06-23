"use client";

// TraceFlow — OSMX'in imza motifi.
// PCB/devre ilhamı: node + ince bağlantı çizgileri.
// Framer Motion pathLength ile giriş animasyonu (sadece bir kez).

import { motion, useReducedMotion } from "framer-motion";
import { heroFlow } from "@/lib/content";

export function TraceFlow() {
  const reduceMotion = useReducedMotion();

  // Node pozisyonları — 2 satır staggered (zigzag)
  // viewBox: 0 0 400 280
  const nodes = [
    { x: 40, y: 70, ...heroFlow[0] },
    { x: 140, y: 50, ...heroFlow[1] },
    { x: 240, y: 70, ...heroFlow[2] },
    { x: 340, y: 50, ...heroFlow[3] },
  ];

  // Path'ler — cubic bezier kıvrımlarla
  const paths = [
    "M 90 88 C 110 88, 120 58, 140 58", // N1 → N2
    "M 190 58 C 210 58, 220 88, 240 88", // N2 → N3
    "M 290 88 C 310 88, 320 58, 340 58", // N3 → N4
  ];

  // Süreler (animasyon sıralaması)
  const baseDelay = 0.4;
  const nodeSize = 36; // node yarıçapı

  return (
    <div className="relative w-full rounded-2xl border border-border bg-bg-elevated overflow-hidden">
      {/* Kart başlığı */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border relative z-10">
        <span className="font-mono text-[0.7rem] tracking-mono uppercase text-accent">
          // Automation Flow
        </span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[0.65rem] tracking-mono uppercase text-muted">
            Live
          </span>
        </div>
      </div>

      {/* SVG şema */}
      <div className="relative aspect-[5/3.5] w-full">
        <svg
          viewBox="0 0 400 200"
          className="absolute inset-0 w-full h-full"
          role="img"
          aria-label="Otomasyon akış şeması: Lead Geldi → Sınıflandır → Bildirim Gönder → Takip"
        >
          {/* Hafif arka plan grid */}
          <defs>
            <pattern
              id="trace-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(199,193,170,0.04)"
                strokeWidth="0.5"
              />
            </pattern>
            {/* Ok ucu — path bitiminde */}
            <marker
              id="arrow-accent"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#93c93c" opacity="0.8" />
            </marker>
          </defs>

          <rect width="400" height="200" fill="url(#trace-grid)" />

          {/* Trace path'ler — sırayla çizilir */}
          {paths.map((d, i) => (
            <motion.path
              key={`trace-${i}`}
              d={d}
              className="trace-line"
              strokeWidth="1.25"
              markerEnd="url(#arrow-accent)"
              initial={
                reduceMotion ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0 }
              }
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                pathLength: {
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : baseDelay + i * 0.35,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: { duration: 0.3, delay: baseDelay + i * 0.35 },
              }}
            />
          ))}

          {/* Node'lar — path'ler çizildikten sonra belirir */}
          {nodes.map((node, i) => {
            const nodeDelay = reduceMotion ? 0 : baseDelay + i * 0.35 + 0.4;
            return (
              <motion.g
                key={`node-${i}`}
                initial={
                  reduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: nodeDelay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              >
                {/* Node dış halka — glow efekti */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize / 2 + 4}
                  fill="none"
                  stroke="#93c93c"
                  strokeWidth="0.5"
                  opacity="0.25"
                />
                {/* Node gövdesi */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize / 2}
                  className="trace-node filled"
                />
                {/* Node iç etiket — numara */}
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="var(--font-mono)"
                  fontWeight="600"
                  fill="#1a1b13"
                >
                  {`0${i + 1}`}
                </text>
              </motion.g>
            );
          })}

          {/* Node label'ları — alt satır */}
          {nodes.map((node, i) => (
            <motion.g
              key={`label-${i}`}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : baseDelay + i * 0.35 + 0.6,
              }}
            >
              <text
                x={node.x}
                y={node.y + 38}
                textAnchor="middle"
                fontSize="9"
                fontFamily="var(--font-mono)"
                fontWeight="500"
                fill="#c7c1aa"
                letterSpacing="0.5"
              >
                {node.label.toUpperCase()}
              </text>
              <text
                x={node.x}
                y={node.y + 50}
                textAnchor="middle"
                fontSize="7"
                fontFamily="var(--font-mono)"
                fill="rgba(199,193,170,0.5)"
                letterSpacing="0.3"
              >
                {node.sub}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>

      {/* Alt köşe etiketi — meta */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-border relative z-10">
        <span className="font-mono text-[0.65rem] tracking-mono uppercase text-dim">
          // 04 nodes · 03 traces
        </span>
        <span className="font-mono text-[0.65rem] tracking-mono uppercase text-dim">
          OSMX · v2
        </span>
      </div>
    </div>
  );
}