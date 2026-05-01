export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-5 py-[7px] px-5 select-none"
      style={{
        background:   '#0A1628',
        color:        '#FFD700',
        fontSize:     '12px',
        fontWeight:   800,
        letterSpacing:'2.5px',
        fontFamily:   "'Bebas Neue', cursive",
      }}
    >
      <span style={{ opacity: 0.45 }}>⚽</span>
      FIFA WORLD CUP 2026 &nbsp;·&nbsp; USA · CANADÁ · MÉXICO
      <span style={{ opacity: 0.45 }}>⚽</span>
    </div>
  )
}
