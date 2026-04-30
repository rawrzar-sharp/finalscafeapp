export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto bg-white/90 sticky top-0 z-50 backdrop-blur-sm">
      <div className="text-[#d35400] font-bold text-2xl tracking-tighter">
        Flame <span className="text-[#e67e22]">'n</span> Foam
      </div>
      <div className="flex items-center gap-8">
        <a href="#menu" className="text-[#d35400] text-sm font-medium hover:underline">Menu</a>
        <a href="#about" className="text-[#d35400] text-sm font-medium hover:underline">About Us</a>
        <button className="relative w-10 h-10 bg-[#d35400] text-white rounded-full flex items-center justify-center hover:bg-[#ba4a00] transition shadow-md">
          🛒
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 border-2 border-white rounded-full"></span>
        </button>
      </div>
    </nav>
  );
}