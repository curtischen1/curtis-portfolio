import { useEffect, useRef, useState } from 'react';

const GH = "'Gloria Hallelujah', cursive";
const TEXT = "Hey, I'm Curtis";
const FONT_SIZE = 96;

interface CharInfo {
  char: string;
  x: number;
  width: number;
}

interface Props {
  onComplete?: () => void;
}

export function HandwrittenTitle({ onComplete }: Props) {
  const measuringRef = useRef<SVGTextElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [chars, setChars] = useState<CharInfo[]>([]);
  const [totalWidth, setTotalWidth] = useState(0);
  const animStarted = useRef(false);

  // Measure character positions after font loads
  useEffect(() => {
    const measure = () => {
      const textEl = measuringRef.current;
      if (!textEl) return;

      try {
        const infos: CharInfo[] = [];
        for (let i = 0; i < TEXT.length; i++) {
          try {
            const extent = textEl.getExtentOfChar(i);
            infos.push({ char: TEXT[i], x: extent.x, width: extent.width });
          } catch {
            const prevEnd = i > 0 ? textEl.getEndPositionOfChar(i - 1).x : 0;
            infos.push({ char: TEXT[i], x: prevEnd, width: 0 });
          }
        }
        const width = textEl.getComputedTextLength();
        if (width > 0 && infos.length > 0) {
          setTotalWidth(width);
          setChars(infos);
          return;
        }
      } catch {
        // Font not ready
      }
      requestAnimationFrame(measure);
    };

    if (document.fonts) {
      document.fonts.ready.then(() => requestAnimationFrame(measure));
    } else {
      requestAnimationFrame(measure);
    }
  }, []);

  // Kick off clip-path animations
  useEffect(() => {
    if (chars.length === 0 || animStarted.current) return;
    animStarted.current = true;

    const svg = svgRef.current;
    if (!svg) return;

    const groups = svg.querySelectorAll<SVGGElement>('.hw-char-group');
    const DRAW_DURATION = 0.6;
    const STAGGER = 0.2;

    groups.forEach((g, i) => {
      if (chars[i].char === ' ') return;

      const delay = i * STAGGER;
      g.style.animation = `char-reveal ${DRAW_DURATION}s ease-out ${delay.toFixed(2)}s forwards`;

      if (i === groups.length - 1) {
        g.addEventListener('animationend', () => onComplete?.());
      }
    });
  }, [chars, onComplete]);

  return (
    <svg
      ref={svgRef}
      width={totalWidth || 1}
      height={FONT_SIZE * 1.3}
      style={{ overflow: 'visible', display: 'block' }}
      aria-hidden="true"
    >
      {/* Hidden measuring text */}
      <text
        ref={measuringRef}
        x="0"
        y={FONT_SIZE}
        style={{
          fontFamily: GH,
          fontSize: `${FONT_SIZE}px`,
          visibility: 'hidden',
        }}
      >
        {TEXT}
      </text>

      {/* Each character wrapped in a group with clip-path animation */}
      {chars.map((cp, i) => (
        <g
          key={i}
          className="hw-char-group"
          style={{ clipPath: 'inset(0 100% 0 0)' }}
        >
          <text
            x={cp.x}
            y={FONT_SIZE}
            style={{
              fontFamily: GH,
              fontSize: `${FONT_SIZE}px`,
              fill: '#000',
            }}
          >
            {cp.char}
          </text>
        </g>
      ))}
    </svg>
  );
}
