export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 px-6 mt-16 text-center text-xs text-slate-500 font-medium">
      <div className="flex justify-center space-x-6 mb-3 text-slate-400">
        <span className="hover:text-emerald-700 cursor-pointer transition">🌐 Web Portal</span>
        <span>•</span>
        <span className="hover:text-emerald-700 cursor-pointer transition">🐙 GitHub Profile</span>
      </div>
      <p>© {new Date().getFullYear()} HimShakti Food Processing Unit. All rights reserved.</p>
    </footer>
  );
}