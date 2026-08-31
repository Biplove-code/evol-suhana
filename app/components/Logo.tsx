interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: { width: 80, fontSize: '1.1rem', letterSpacing: '0.08em' },
  md: { width: 120, fontSize: '1.5rem', letterSpacing: '0.1em' },
  lg: { width: 180, fontSize: '2rem', letterSpacing: '0.12em' },
};

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const { width, fontSize, letterSpacing } = sizeMap[size];

  return (
    <div
      className={`evol-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        textDecoration: 'none',
      }}
    >
      <svg
        width={size === 'sm' ? 28 : size === 'md' ? 36 : 48}
        height={size === 'sm' ? 28 : size === 'md' ? 36 : 48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect width="48" height="48" rx="8" fill="#1a1a1a" />
        <text
          x="50%"
          y="54%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="300"
          fontSize="22"
          letterSpacing="2"
        >
          e
        </text>
      </svg>
      <span
        style={{
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          fontWeight: 300,
          fontSize,
          letterSpacing,
          color: '#1a1a1a',
          lineHeight: 1,
        }}
      >
        EVOL
      </span>
    </div>
  );
}

export function LogoWordmark({ className = '' }: { className?: string }) {
  return (
    <div
      className={`evol-wordmark ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
      }}
    >
      <span
        style={{
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          fontWeight: 200,
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          letterSpacing: '0.15em',
          color: '#1a1a1a',
          lineHeight: 1,
        }}
      >
        EVOL
      </span>
    </div>
  );
}

export function LogoMinimal({ className = '' }: { className?: string }) {
  return (
    <span
      className={`evol-logo-minimal ${className}`}
      style={{
        fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        fontWeight: 200,
        fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        letterSpacing: '0.2em',
        color: '#1a1a1a',
        lineHeight: 1,
      }}
    >
      EVOL
    </span>
  );
}