export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-16 px-6 text-center rounded-2xl my-6 border border-emerald-100/60 shadow-sm">
      <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
        SIP 2026 Core Module
      </span>
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
        AI Product Description Generator
      </h1>
      <p className="text-md md:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        Instantly transform regional food ingredients, estimated shelf life metrics, and traditional packaging parameters into commercial, market-ready copywriting layouts.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/dashboard" className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition inline-block">
          Launch Dashboard
        </a>
        <a href="/about" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-6 py-3 rounded-lg transition inline-block">
          Explore Context
        </a>
      </div>
    </section>
  );
}