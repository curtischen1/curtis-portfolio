import { useState, useEffect, useRef } from 'react';

const BRICK_SRC = '/assets/empty brick.png';
const BRICK_WIDTH = 180;
const BRICK_HEIGHT = 124;
const X_OFFSET = 40;
const STEP_Y = 70;
const CYCLE_MS = 700;
const DROP_PX = 50;

interface LoadingScreenProps {
  onComplete: () => void;
}

interface BrickState {
  id: number;
  x: number;
  targetY: number;
  opacity: number;
  settled: boolean;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [ready, setReady] = useState(false);
  const [bricks, setBricks] = useState<BrickState[]>([]);
  const stepRef = useRef(0);

  // Preload site images
  useEffect(() => {
    const siteImages = [
      BRICK_SRC,
      '/assets/Salesforce Lego.png',
      '/assets/Amazon Lego.png',
      '/assets/AISC Lego.png',
      '/assets/PS Lego.png',
      '/assets/Notion Lego.png',
      '/assets/KnoWhiz Lego.png',
      '/assets/Telos Lego.png',
      '/assets/ASUCD Lego.png',
      '/assets/Curtis_TypeWriter.png',
      '/assets/arrow_loop.png',
    ];

    let loaded = 0;
    siteImages.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded >= siteImages.length) setReady(true);
      };
      img.src = src;
    });
  }, []);

  // Add a new brick each cycle
  useEffect(() => {
    // Start with first brick already placed
    setBricks([{
      id: 0,
      x: 0,
      targetY: STEP_Y,
      opacity: 1,
      settled: true,
    }]);

    const interval = setInterval(() => {
      stepRef.current += 1;
      const step = stepRef.current;

      setBricks((prev) => {
        const newBricks: BrickState[] = [];

        // Previous bricks shift down: top becomes bottom, bottom fades out
        for (const brick of prev) {
          if (brick.targetY >= STEP_Y * 2) {
            // Already at fade position — remove it
            continue;
          }
          newBricks.push({
            ...brick,
            targetY: brick.targetY + STEP_Y,
            opacity: brick.targetY + STEP_Y >= STEP_Y * 2 ? 0 : 1,
            settled: true,
          });
        }

        // New brick entering at top — starts unsettled (will be 50px above)
        newBricks.push({
          id: step,
          x: step % 2 === 0 ? 0 : X_OFFSET,
          targetY: 0,
          opacity: 1,
          settled: false,
        });

        return newBricks;
      });

      // Settle the new brick after a frame so the transition fires
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setBricks((prev) =>
            prev.map((b) => (b.settled ? b : { ...b, settled: true }))
          );
        });
      });
    }, CYCLE_MS);

    return () => clearInterval(interval);
  }, []);

  // Finish when ready and we've shown enough cycles
  useEffect(() => {
    if (ready && stepRef.current >= 3) {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }
  }, [ready, bricks]);

  const containerWidth = BRICK_WIDTH + X_OFFSET;
  const containerHeight = BRICK_HEIGHT + STEP_Y * 2;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#F1EEE1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: containerWidth,
          height: containerHeight,
        }}
      >
        {bricks.map((brick) => (
          <img
            key={brick.id}
            src={BRICK_SRC}
            alt=""
            style={{
              position: 'absolute',
              top: brick.targetY,
              left: brick.x,
              width: BRICK_WIDTH,
              height: BRICK_HEIGHT,
              opacity: brick.opacity,
              transform: brick.settled ? 'translateY(0)' : `translateY(-${DROP_PX}px)`,
              transition: `top ${CYCLE_MS * 0.5}ms ease, opacity ${CYCLE_MS * 0.5}ms ease, transform ${CYCLE_MS * 0.5}ms ease`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
