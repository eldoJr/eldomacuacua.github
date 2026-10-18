interface Props {
  animate?: boolean;
  width?: number;
}

export default function LogoSvg({ animate = false, width = 36 }: Props) {
  const h = Math.round(width * (36 / 32));

  const stroke = (delay: string, len: number) =>
    animate
      ? {
          strokeDasharray: len,
          strokeDashoffset: len,
          animation: `drawStroke 0.7s cubic-bezier(0.4,0,0.2,1) ${delay} forwards`,
        }
      : {};

  return (
    <svg
      width={width}
      height={h}
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="E"
    >
      <line x1="2" y1="2"  x2="30" y2="2"  stroke="var(--color-accent)" strokeWidth="3.5" strokeLinecap="round" style={stroke("0.4s", 28)} />
      <line x1="2" y1="18" x2="22" y2="18" stroke="var(--color-accent)" strokeWidth="3.5" strokeLinecap="round" style={stroke("1.1s", 20)} />
      <line x1="2" y1="34" x2="30" y2="34" stroke="var(--color-accent)" strokeWidth="3.5" strokeLinecap="round" style={stroke("1.8s", 28)} />
    </svg>
  );
}
