export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-emerald-900 text-white shadow-md">
      {/* Brand Placement */}
      <div className="font-bold text-xl tracking-wide flex items-center gap-2">
        ⛰️ <span className="text-emerald-100">HimShakti</span>
      </div>
      
      {/* Structural Navigation Paths */}
      <div className="hidden md:flex space-x-6 font-medium">
        <a href="/" className="hover:text-emerald-300 transition">Home</a>
        <a href="/dashboard" className="hover:text-emerald-300 transition">Dashboard</a>
        <a href="/about" className="hover:text-emerald-300 transition">About</a>
        <a href="/login" className="hover:text-emerald-300 transition">Login</a>
      </div>
      
      {/* User Session Profile Stub */}
      <div className="w-9 h-9 rounded-full bg-emerald-700 border border-emerald-500 flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition">
        <span className="text-xs font-bold text-emerald-50">ST</span>
      </div>
    </nav>
  );
}