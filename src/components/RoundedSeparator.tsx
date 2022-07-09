function RoundedSeparator({ className }: { className: string }) {
  return (
    <svg
      className="absolute top-[-60px] rotate-180"
      width="100%"
      height="80"
      viewBox="0 0 500 80"
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id="shape">
          <path d="M0,0 L0,80 Q250,30 500,80 L500,0 Z" />
        </clipPath>
      </defs>
      <rect
        x="0"
        y="0"
        width="500"
        height="80"
        className={className}
        clipPath="url(#shape)"
      />
    </svg>
  );
}

export default RoundedSeparator;
