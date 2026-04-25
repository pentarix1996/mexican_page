export function DecorativePattern() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full opacity-20"
    >
      {/* Calavera / Day of the Dead skull pattern */}
      <defs>
        <pattern id="calavera" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          {/* Skull shape */}
          <circle cx="30" cy="25" r="18" fill="currentColor" />
          {/* Eye sockets */}
          <circle cx="23" cy="22" r="5" fill="#FDF0D5" />
          <circle cx="37" cy="22" r="5" fill="#FDF0D5" />
          {/* Nose */}
          <path d="M28 28 L30 33 L32 28" fill="#FDF0D5" />
          {/* Teeth */}
          <rect x="22" y="35" width="16" height="4" fill="currentColor" rx="1" />
          <line x1="26" y1="35" x2="26" y2="39" stroke="#FDF0D5" strokeWidth="1" />
          <line x1="30" y1="35" x2="30" y2="39" stroke="#FDF0D5" strokeWidth="1" />
          <line x1="34" y1="35" x2="34" y2="39" stroke="#FDF0D5" strokeWidth="1" />
          {/* Decorative elements */}
          <circle cx="30" cy="50" r="3" fill="currentColor" />
          <path d="M15 45 Q30 55 45 45" stroke="currentColor" strokeWidth="2" fill="none" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#calavera)" />
    </svg>
  );
}