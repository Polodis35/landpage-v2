// ServiceIcons — her hizmet için özgün SVG şema.
// Trace motifi ile uyumlu: node + çizgi, aynı çizgi kalınlığı.
// viewBox: 80x80, stroke-width: 1, accent rengi.

import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  hovered?: boolean;
}

const baseProps = {
  width: 56,
  height: 56,
  viewBox: "0 0 80 80",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CodeIcon({ hovered, ...props }: IconProps) {
  // Yazılım Geliştirme — kod penceresi
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      <rect x="10" y="14" width="60" height="52" rx="3" />
      <line x1="10" y1="26" x2="70" y2="26" />
      <circle cx="16" cy="20" r="1.5" fill="currentColor" />
      <circle cx="22" cy="20" r="1.5" fill="currentColor" />
      <circle cx="28" cy="20" r="1.5" fill="currentColor" />
      {/* Kod satırları — girintili */}
      <line
        x1="20"
        y1="36"
        x2="40"
        y2="36"
        opacity={hovered ? 1 : 0.7}
      />
      <line
        x1="26"
        y1="44"
        x2="56"
        y2="44"
        opacity={hovered ? 1 : 0.7}
      />
      <line
        x1="20"
        y1="52"
        x2="44"
        y2="52"
        opacity={hovered ? 1 : 0.7}
      />
      <line
        x1="26"
        y1="60"
        x2="50"
        y2="60"
        opacity={hovered ? 1 : 0.7}
      />
    </svg>
  );
}

export function BrowserIcon({ hovered, ...props }: IconProps) {
  // Web Sitesi — browser frame
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      <rect x="10" y="14" width="60" height="52" rx="3" />
      <line x1="10" y1="26" x2="70" y2="26" />
      <circle cx="16" cy="20" r="1.5" fill="currentColor" />
      <circle cx="22" cy="20" r="1.5" fill="currentColor" />
      <circle cx="28" cy="20" r="1.5" fill="currentColor" />
      {/* URL bar */}
      <rect
        x="34"
        y="17"
        width="32"
        height="6"
        rx="3"
        opacity={hovered ? 1 : 0.5}
      />
      {/* Sayfa içeriği */}
      <rect
        x="16"
        y="32"
        width="48"
        height="6"
        rx="1"
        opacity={hovered ? 1 : 0.7}
      />
      <rect
        x="16"
        y="42"
        width="32"
        height="20"
        rx="1"
        opacity={hovered ? 1 : 0.5}
      />
      <rect
        x="52"
        y="42"
        width="12"
        height="20"
        rx="1"
        opacity={hovered ? 1 : 0.5}
      />
    </svg>
  );
}

export function ChartIcon({ hovered, ...props }: IconProps) {
  // Veri Analizi — bar chart + trend line
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      {/* Axes */}
      <line x1="14" y1="62" x2="66" y2="62" />
      <line x1="14" y1="18" x2="14" y2="62" />
      {/* Barlar */}
      <rect
        x="20"
        y="46"
        width="8"
        height="16"
        opacity={hovered ? 1 : 0.7}
      />
      <rect
        x="32"
        y="36"
        width="8"
        height="26"
        opacity={hovered ? 1 : 0.7}
      />
      <rect
        x="44"
        y="28"
        width="8"
        height="34"
        opacity={hovered ? 1 : 0.85}
      />
      <rect
        x="56"
        y="22"
        width="8"
        height="40"
        fill="currentColor"
        opacity={hovered ? 1 : 0.5}
      />
      {/* Trend noktaları */}
      <circle cx="24" cy="46" r="1.5" fill="currentColor" />
      <circle cx="36" cy="36" r="1.5" fill="currentColor" />
      <circle cx="48" cy="28" r="1.5" fill="currentColor" />
      <circle cx="60" cy="22" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function FlowIcon({ hovered, ...props }: IconProps) {
  // Otomasyon — node akışı (3 node + 2 path)
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      {/* Trace'ler */}
      <path
        d="M 22 40 C 28 40, 32 40, 38 40"
        opacity={hovered ? 1 : 0.7}
      />
      <path
        d="M 42 40 C 48 40, 52 40, 58 40"
        opacity={hovered ? 1 : 0.7}
      />
      {/* Node'lar */}
      <circle
        cx="18"
        cy="40"
        r="5"
        fill="currentColor"
        opacity={hovered ? 1 : 0.4}
      />
      <circle
        cx="40"
        cy="40"
        r="5"
        fill="currentColor"
        opacity={hovered ? 1 : 0.85}
      />
      <circle
        cx="62"
        cy="40"
        r="5"
        fill="currentColor"
        opacity={hovered ? 1 : 0.4}
      />
      {/* Küçük ek node'lar (branching) */}
      <circle
        cx="40"
        cy="22"
        r="3"
        opacity={hovered ? 1 : 0.5}
      />
      <path
        d="M 40 30 L 40 35"
        opacity={hovered ? 1 : 0.5}
      />
      <circle
        cx="40"
        cy="58"
        r="3"
        opacity={hovered ? 1 : 0.5}
      />
      <path
        d="M 40 45 L 40 55"
        opacity={hovered ? 1 : 0.5}
      />
    </svg>
  );
}

export function GraphIcon({ hovered, ...props }: IconProps) {
  // AI Ajanları — bağlı node grafiği (graph network)
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      {/* Bağlantılar (ince) */}
      <line
        x1="24"
        y1="26"
        x2="40"
        y2="40"
        opacity={hovered ? 1 : 0.4}
      />
      <line
        x1="56"
        y1="26"
        x2="40"
        y2="40"
        opacity={hovered ? 1 : 0.4}
      />
      <line
        x1="24"
        y1="54"
        x2="40"
        y2="40"
        opacity={hovered ? 1 : 0.4}
      />
      <line
        x1="56"
        y1="54"
        x2="40"
        y2="40"
        opacity={hovered ? 1 : 0.4}
      />
      <line
        x1="24"
        y1="26"
        x2="24"
        y2="54"
        opacity={hovered ? 1 : 0.3}
      />
      <line
        x1="56"
        y1="26"
        x2="56"
        y2="54"
        opacity={hovered ? 1 : 0.3}
      />
      {/* Node'lar — merkez dolu, çevre halka */}
      <circle
        cx="40"
        cy="40"
        r="6"
        fill="currentColor"
        opacity={hovered ? 1 : 0.85}
      />
      <circle cx="24" cy="26" r="4" />
      <circle cx="56" cy="26" r="4" />
      <circle cx="24" cy="54" r="4" />
      <circle cx="56" cy="54" r="4" />
    </svg>
  );
}

export function RoadmapIcon({ hovered, ...props }: IconProps) {
  // Danışmanlık — yol haritası (checkpoint'ler)
  return (
    <svg {...baseProps} {...props} aria-hidden="true">
      {/* Ana yol — kıvrımlı */}
      <path
        d="M 14 50 C 22 50, 26 32, 36 32 C 46 32, 50 50, 58 50 C 62 50, 64 44, 66 38"
        opacity={hovered ? 1 : 0.7}
      />
      {/* Checkpoint'ler */}
      <circle
        cx="14"
        cy="50"
        r="4"
        fill="currentColor"
        opacity={hovered ? 1 : 0.4}
      />
      <circle
        cx="36"
        cy="32"
        r="4"
        fill="currentColor"
        opacity={hovered ? 1 : 0.85}
      />
      <circle
        cx="58"
        cy="50"
        r="4"
        fill="currentColor"
        opacity={hovered ? 1 : 0.4}
      />
      {/* Final — bayrak */}
      <line x1="66" y1="38" x2="66" y2="22" />
      <path d="M 66 22 L 72 25 L 66 28 Z" fill="currentColor" />
    </svg>
  );
}

export const serviceIconMap = {
  code: CodeIcon,
  browser: BrowserIcon,
  chart: ChartIcon,
  flow: FlowIcon,
  graph: GraphIcon,
  roadmap: RoadmapIcon,
} as const;