interface SlantedUnderlineProps {
  children: React.ReactNode;
  offset?: number;
}

export function SlantedUnderline({ children, offset = -8 }: SlantedUnderlineProps) {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <svg
        style={{
          position: 'absolute',
          bottom: offset,
          left: 0,
          width: '100%',
          height: '12px',
          overflow: 'visible',
        }}
        preserveAspectRatio="none"
        viewBox="0 0 200 12"
      >
        <path
          d="M 0 11 Q 30 9, 60 7 Q 90 5, 120 5 Q 150 4, 180 2 L 200 1"
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
