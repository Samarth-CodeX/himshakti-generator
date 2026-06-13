export default function Card({ title, category, shelfLife }) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm p-5 hover:shadow-md hover:border-emerald-200 transition duration-200 flex flex-col justify-between">
      <div>
        {/* Visual Product Placeholder Graphic layout */}
        <div className="w-full h-36 bg-slate-50 border border-dashed border-slate-200 rounded-lg mb-4 flex flex-col items-center justify-center text-slate-400 gap-1 text-sm font-medium">
          <span>🖼️ Catalog Preview</span>
          <span className="text-xs text-slate-400 font-normal">Asset Pending Database Wireframe</span>
        </div>
        
        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
          {category || "Food Category"}
        </span>
        
        <h3 className="font-bold text-lg text-slate-900 mt-2.5 leading-snug">{title || "Organic Food Product"}</h3>
        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
          ⏱️ Shelf Life: <span className="font-medium text-slate-700">{shelfLife || "Unspecified"}</span>
        </p>
      </div>
      
      <button className="w-full mt-5 text-xs font-semibold bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 py-2.5 rounded-md border border-slate-200/60 hover:border-emerald-200/60 transition shadow-xs">
        View Draft Specifications
      </button>
    </div>
  );
}