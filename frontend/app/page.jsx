import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="space-y-10 pb-8">
      {/* 1. Marketing Entry Banner Section */}
      <Hero />
      
      {/* 2. Mock Showcase Catalog Grid Row */}
      <div>
        <div className="border-b border-slate-200 pb-3 mb-6">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Featured Processing Unit Catalog</h2>
          <p className="text-xs text-slate-500 mt-0.5">Iterative sample records mapped into dynamic frontend prop arrays</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Organic Apple Chutney" category="Pickles & Preserves" shelfLife="6 Months" />
          <Card title="Pure Rhododendron Juice" category="Juices & Beverages" shelfLife="4 Months" />
          <Card title="Himalayan Herbal Tea" category="Infusions & Teas" shelfLife="1 Year" />
        </div>
      </div>
    </div>
  );
}