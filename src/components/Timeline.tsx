import { useState, useEffect, useRef } from 'react';
import { SlantedUnderline } from './SlantedUnderline';

const GH = "'Gloria Hallelujah', cursive";

// ═══════════════════════════════════════════════════════════════════
// LAYOUT VARIABLES — extracted from Figma "Lego Timeline" group
// ═══════════════════════════════════════════════════════════════════

const BRICK_WIDTH    = 320;
const BRICK_HEIGHT   = 221;
const STEP_A = 106;
const STEP_B = 142;
const X_OFFSET = 69;

function getBrickTop(index: number): number {
  const pairs     = Math.floor(index / 2);
  const remainder = index % 2;
  return pairs * (STEP_A + STEP_B) + remainder * STEP_A;
}

const timelineData = [
  {
    year: '2026',
    company: 'Salesforce',
    role: 'Associate Product Manager',
    description: 'AI B2B SaaS, excited to learn!',
    image: '/assets/Salesforce Lego.png',
  },
  {
    year: '2025',
    company: 'Amazon',
    role: 'Program Manager',
    description: 'Built internal AI product to optimize labor planning, projected to save millions',
    image: '/assets/Amazon Lego.png',
  },
  {
    year: '2025',
    company: 'AI Student Collective',
    role: 'President',
    description: 'Building the biggest AI community at UC Davis; helping students build and use AI effectively',
    image: '/assets/AISC Lego.png',
  },
  {
    year: '2025',
    company: 'Product Space',
    role: 'Founding Vice President',
    description: 'Teaching students about product and how to break into the industry',
    image: '/assets/PS Lego.png',
  },
  {
    year: '2024',
    company: 'Notion',
    role: 'Campus Leader, Growth',
    description: 'Led growth at UC Davis, helping hundreds of students discover and adopt Notion',
    image: '/assets/Notion Lego.png',
  },
  {
    year: '2024',
    company: 'KnoWhiz',
    role: 'Product Manager',
    description: 'Edtech; shaped product experience and led go-to-market strategy',
    image: '/assets/KnoWhiz Lego.png',
  },
  {
    year: '2024',
    company: 'Telos',
    role: 'Product Manager',
    description: 'Healthtech; improved user experience and built features to drive engagement',
    image: '/assets/Telos Lego.png',
  },
  {
    year: '2023',
    company: 'ASUCD',
    role: 'Senator',
    description: 'Problem discovery, user research, and CX collaboration on initiatives benefiting 31,000+ students',
    image: '/assets/ASUCD Lego.png',
  },
];

// Reveal order: bottom brick (ASUCD) first, top brick (Salesforce) last
const REVEAL_ORDER = [7, 6, 5, 4, 3, 2, 1, 0];
const SCROLL_PER_BRICK = 350; // px of scroll per brick reveal
const ENTRY_Y = getBrickTop(1); // ~106px, entry point near top

// Cartoonish snap impact lines — 3 disconnected fanning lines on each side
function SnapLinesSVG({ brickIndex, top, left, fading }: { brickIndex: number; top: number; left: number; fading: boolean }) {
  const thisLeft = brickIndex % 2 === 0 ? X_OFFSET : 0;
  const belowIndex = brickIndex + 1;
  const belowLeft = belowIndex % 2 === 0 ? X_OFFSET : 0;
  const brickToRight = thisLeft > belowLeft;

  const LINE_LENGTH = 45;
  const LINE_GAP = 18;
  const SPREAD = 28; // angular spread between lines
  const LINE_SPACING = 22; // spacing between each disconnected line's origin

  const topAngles = brickToRight
    ? [-135 - SPREAD, -135, -135 + SPREAD]
    : [-20 - SPREAD, -20, -20 + SPREAD];
  const bottomAngles = brickToRight
    ? [45 - SPREAD, 45, 45 + SPREAD]
    : [160 - SPREAD, 160, 160 + SPREAD];

  const connectionY = top + BRICK_HEIGHT * 0.85;
  const topX = brickToRight ? left - LINE_GAP - 15 : left + BRICK_WIDTH + LINE_GAP + 15 + 10;
  const topY = brickToRight ? connectionY - 15 - 80 - 15 : connectionY - 15 - 30 - 15 + 5;
  const bottomX = brickToRight ? left + BRICK_WIDTH + LINE_GAP - 50 + 15 - 5 : left - LINE_GAP + 40;
  const bottomY = brickToRight ? connectionY + 15 + 15 : connectionY + 15 + 5;

  function renderLines(cx: number, cy: number, angles: number[]) {
    return angles.map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const len = LINE_LENGTH;
      // Offset each line's origin along the brick edge so they're disconnected
      const offsetIdx = i - 1; // -1, 0, 1
      const perpRad = rad + Math.PI / 2; // perpendicular to line direction
      const ox = cx + Math.cos(perpRad) * offsetIdx * LINE_SPACING;
      const oy = cy + Math.sin(perpRad) * offsetIdx * LINE_SPACING;
      // Line starts with a small gap from origin
      const gapStart = 8;
      const x1 = ox + Math.cos(rad) * gapStart;
      const y1 = oy + Math.sin(rad) * gapStart;
      const x2 = ox + Math.cos(rad) * (gapStart + len);
      const y2 = oy + Math.sin(rad) * (gapStart + len);
      return (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      );
    });
  }

  return (
    <g className={fading ? 'snap-lines-out' : 'snap-lines-in'}>
      {renderLines(topX, topY, topAngles)}
      {renderLines(bottomX, bottomY, bottomAngles)}
    </g>
  );
}

export function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animComplete, setAnimComplete] = useState(false);
  const [showLastSnapLines, setShowLastSnapLines] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const snappedBricksRef = useRef<Set<number>>(new Set());
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;
    fetch('/assets/lego-click.wav')
      .then((r) => r.arrayBuffer())
      .then((buf) => ctx.decodeAudioData(buf))
      .then((decoded) => { audioBufferRef.current = decoded; });
  }, []);

  function playClick() {
    const ctx = audioCtxRef.current;
    const buffer = audioBufferRef.current;
    if (!ctx || !buffer) return;
    if (ctx.state === 'suspended') ctx.resume();
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.value = 0.3;
    source.connect(gain).connect(ctx.destination);
    source.start();
  }

  const totalBricks     = timelineData.length;
  const containerWidth  = BRICK_WIDTH + X_OFFSET;
  const containerHeight = getBrickTop(totalBricks - 1) + BRICK_HEIGHT;
  const scrollHeight    = containerHeight + totalBricks * SCROLL_PER_BRICK;

  useEffect(() => {
    if (animComplete) return; // Stop tracking once animation is done

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const viewportHeight = window.innerHeight;

      const scrollIntoSection = -(sectionTop - viewportHeight * 0.3);
      const scrollRange = totalBricks * SCROLL_PER_BRICK;
      const progress = Math.max(0, Math.min(totalBricks, (scrollIntoSection / scrollRange) * totalBricks));

      setScrollProgress(progress);

      // Play click sound when a brick is within 3px of its snap position
      // Skip step 0 (first brick) — it has nothing to snap against
      for (let step = 1; step < totalBricks; step++) {
        const brickIdx = REVEAL_ORDER[step];
        if (snappedBricksRef.current.has(brickIdx)) continue;
        const entrance = Math.max(0, Math.min(1, progress - step));
        // entrance offset: -50 * (1 - translateProgress), where translateProgress = clamp((entrance - 0.5) * 2)
        const translateProgress = Math.max(0, Math.min(1, (entrance - 0.5) * 2));
        const entranceOffset = Math.abs(-50 * (1 - translateProgress));
        if (entranceOffset <= 3 && entrance > 0) {
          snappedBricksRef.current.add(brickIdx);
          playClick();
        }
      }

      // Lock in as static once all bricks are fully revealed
      if (progress >= totalBricks) {
        // Lock scrolling until transition is complete
        document.body.style.overflow = 'hidden';
        // Show snap lines for last brick before completing
        setShowLastSnapLines(true);
        setTimeout(() => {
          setShowLastSnapLines(false);
          const sectionEl = sectionRef.current;
          if (sectionEl) {
            const sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;
            window.scrollTo(0, sectionTop);
          }
          setAnimComplete(true);
          document.body.style.overflow = '';
        }, 700);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalBricks]);

  // Calculate stack offset using continuous scroll progress.
  // All revealed bricks move by the same offset to preserve spacing.
  function getStackOffset(): number {
    if (scrollProgress <= 0) return 0;

    const clamped = Math.min(scrollProgress, totalBricks);
    const lower = Math.floor(clamped);
    const upper = Math.ceil(clamped);
    const frac = clamped - lower;

    function offsetForCount(n: number): number {
      const effective = Math.max(n, 1); // treat 0 same as 1
      const topIdx = REVEAL_ORDER[Math.min(effective, totalBricks) - 1];
      const keepAtEntryOffset = ENTRY_Y - getBrickTop(topIdx);
      const blend = (Math.min(n, totalBricks) - 1) / (totalBricks - 1);
      return keepAtEntryOffset * (1 - blend);
    }

    const offsetLow = offsetForCount(lower);
    const offsetHigh = offsetForCount(upper);
    return offsetLow + (offsetHigh - offsetLow) * frac;
  }

  // Per-brick entrance has two phases:
  // Phase 1 (0–0.5 of scroll segment): fade in at 50px above, no movement
  // Phase 2 (0.5–1.0 of scroll segment): fully visible, translate down 50px to position
  function getBrickEntrance(originalIndex: number): number {
    const revealStep = REVEAL_ORDER.indexOf(originalIndex);
    // Raw progress through this brick's scroll segment (0 to 1)
    return Math.max(0, Math.min(1, scrollProgress - revealStep));
  }

  function getBrickAnimatedTop(originalIndex: number): number {
    if (animComplete) return getBrickTop(originalIndex);
    const entrance = getBrickEntrance(originalIndex);
    const translateProgress = Math.max(0, Math.min(1, (entrance - 0.5) * 2));
    const entranceOffset = -50 * (1 - translateProgress);
    return getBrickTop(originalIndex) + getStackOffset() + entranceOffset;
  }

  function getBrickOpacity(originalIndex: number): number {
    if (animComplete) return 1;
    const entrance = getBrickEntrance(originalIndex);
    return Math.min(1, entrance * 2);
  }

  function isBrickVisible(originalIndex: number): boolean {
    return getBrickOpacity(originalIndex) > 0;
  }

  // Compute which brick should show snap lines based on scroll state.
  // Lines show when: brick is at final position (entrance >= 1) AND
  // the next brick in reveal order is not yet fully opaque.
  function getActiveSnapBrick(): number | null {
    if (showLastSnapLines) return 0; // Salesforce-Amazon connection
    if (animComplete) return null;
    // Check bricks in reveal order (skip first — ASUCD has nothing to snap against)
    for (let step = totalBricks - 1; step >= 1; step--) {
      const brickIdx = REVEAL_ORDER[step];
      const entrance = getBrickEntrance(brickIdx);
      // Next brick in reveal order (the one that appeared before this one)
      const prevStep = step - 1;
      const prevBrickIdx = REVEAL_ORDER[prevStep];
      const prevEntrance = getBrickEntrance(prevBrickIdx);

      // This brick is settled and the brick below it is also visible
      if (entrance >= 1.0 && prevEntrance >= 1.0) {
        // But the NEXT brick above (if any) isn't fully opaque yet
        const nextStep = step + 1;
        if (nextStep >= totalBricks) {
          // This is the last brick (Salesforce) — show lines
          return brickIdx;
        }
        const nextBrickIdx = REVEAL_ORDER[nextStep];
        const nextOpacity = getBrickOpacity(nextBrickIdx);
        if (nextOpacity < 1) {
          return brickIdx;
        }
      }
    }
    return null;
  }

  const activeSnapBrick = getActiveSnapBrick();

  return (
    <section ref={sectionRef} style={{ paddingLeft: '80px', minHeight: animComplete ? undefined : scrollHeight }}>
      <div style={animComplete ? { paddingTop: '48px', paddingBottom: '48px' } : { position: 'sticky', top: '0px', paddingTop: '48px', paddingBottom: '48px' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontFamily: GH,
              fontSize: '72px',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            <SlantedUnderline>Timeline</SlantedUnderline>
          </h2>
        </div>

        {/* Two-column: brick stack left, sticky tooltip right */}
        <div style={{ display: 'flex', gap: '250px', alignItems: 'flex-start' }}>

          {/* Brick stack */}
          <div
            style={{
              position: 'relative',
              width: containerWidth,
              height: containerHeight,
              flexShrink: 0,
              marginTop: '20px',
            }}
          >
            {timelineData.map((item, index) => {
              const opacity = getBrickOpacity(index);
              const visible = opacity > 0;
              const animatedTop = getBrickAnimatedTop(index);
              const left   = index % 2 === 0 ? X_OFFSET : 0;
              const zIndex = totalBricks - index;

              return (
                <div
                  key={item.company}
                  data-brick={item.company.toLowerCase().replace(/\s+/g, '-')}
                  onMouseEnter={() => (animComplete && visible) ? setHoveredIndex(index) : undefined}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => (animComplete && visible) ? setClickedIndex(index) : undefined}
                  style={{
                    position: 'absolute',
                    top: animatedTop,
                    left,
                    width: BRICK_WIDTH,
                    height: BRICK_HEIGHT,
                    zIndex,
                    cursor: visible ? 'pointer' : 'default',
                    opacity,
                    pointerEvents: visible ? 'auto' : 'none',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.company}
                    draggable={false}
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      userSelect: 'none',
                    }}
                  />
                </div>
              );
            })}

            {/* Snap impact lines overlay */}
            {activeSnapBrick !== null && (
              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  left: -30,
                  width: containerWidth + 60,
                  height: containerHeight + 100,
                  pointerEvents: 'none',
                  overflow: 'visible',
                }}
              >
                <SnapLinesSVG
                  brickIndex={activeSnapBrick}
                  top={getBrickAnimatedTop(activeSnapBrick)}
                  left={(activeSnapBrick % 2 === 0 ? X_OFFSET : 0) + 30}
                  fading={false}
                />
              </svg>
            )}
          </div>

          {/* Right column: big subtitle + tooltip */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily: GH,
                fontSize: '48px',
                lineHeight: 1.2,
                marginBottom: '32px',
              }}
            >
              Scroll to watch me<br />build my career!
            </p>
            <img
              src="/assets/arrow_loop.png"
              alt=""
              style={{
                width: '85px',
                display: 'block',
                marginLeft: '-90px',
                marginTop: '215px',
                transform: 'translateX(-5px) translateY(-125px) rotate(15deg)',
                marginBottom: '16px',
                mixBlendMode: 'multiply',
                opacity: animComplete ? 1 : 0,
                transition: 'opacity 0.5s ease-in',
              }}
            />
            <div
              style={{
                fontFamily: GH,
                fontSize: '30px',
                color: 'black',
                lineHeight: 1.6,
                whiteSpace: 'nowrap',
                marginTop: '-260px',
                opacity: animComplete ? 1 : 0,
                transition: 'opacity 0.5s ease-in',
              }}
            >
              click a block to learn more
            </div>
            {(hoveredIndex ?? clickedIndex) !== null && (
              <div
                style={{
                  border: '4px solid black',
                  padding: '20px',
                  backgroundColor: '#F6F5F3',
                  marginTop: '16px',
                  transform: 'translateY(25px)',
                  width: '500px',
                  height: '240px',
                }}
              >
                <div style={{ fontFamily: GH, fontSize: '40px', marginBottom: '2px' }}>
                  {timelineData[(hoveredIndex ?? clickedIndex)!].company}
                </div>
                <div
                  style={{
                    fontFamily: GH,
                    fontSize: '30px',
                    color: '#333',
                    marginBottom: '10px',
                  }}
                >
                  {timelineData[(hoveredIndex ?? clickedIndex)!].role}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: 'black', lineHeight: 1.5 }}>
                  {timelineData[(hoveredIndex ?? clickedIndex)!].description}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
