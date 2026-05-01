export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-3 sm:gap-5 py-[7px] px-3 sm:px-5 select-none whitespace-nowrap overflow-hidden"
      style={{
        background:    '#0A1628',
        color:         '#FFD700',
        fontWeight:    800,
        fontFamily:    "'Bebas Neue', cursive",
      }}
    >
      <span className="opacity-45 text-xs sm:text-sm">⚽</span>

      {/* Full label on tablet+ */}
      <span className="hidden sm:inline text-[12px] tracking-[2.5px]">
        FIFA WORLD CUP 2026 &nbsp;·&nbsp; USA · CANADÁ · MÉXICO
      </span>

      {/* Compact label on phones */}
      <span className="sm:hidden text-[10.5px] tracking-[1.4px]">
        FIFA 2026 · USA · CAN · MEX
      </span>

      <span className="opacity-45 text-xs sm:text-sm">⚽</span>
    </div>
  )
}
