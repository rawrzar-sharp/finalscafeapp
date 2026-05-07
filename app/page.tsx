"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "./components/BottomNav";
import { CartService } from "./services/cartService";

const COFFEE_LIST = [
  { name: "Espresso", price: 15000, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348", category: "Hot", isPopular: true },
  { name: "Latte", price: 20000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", category: "Hot" },
  { name: "Cappuccino", price: 22000, image: "https://images.unsplash.com/photo-1521305916504-4a1121188589", category: "Hot" },
  { name: "Americano", price: 18000, image: "https://images.unsplash.com/photo-1498804103079-a6351b050ab9", category: "Cold" },
];

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = COFFEE_LIST.filter(coffee => {
    const matchesSearch = coffee.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || coffee.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQuickAdd = (coffee: typeof COFFEE_LIST[0]) => {
    CartService.addToCart({
      coffee,
      quantity: 1,
      cupSize: "Regular",
      iceLevel: "Normal Ice",
      sugarLevel: "Normal Sugar"
    });
    router.push("/cart");
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-800 pb-24 max-w-md mx-auto shadow-2xl overflow-x-hidden relative">
      {/* Top Bar Background Cokelat Gelap Premium */}
      <div className="bg-gradient-to-b from-[#131313] to-[#313131] text-white p-6 pb-24 rounded-b-[32px]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs text-gray-400">Location</p>
            <h4 className="text-sm font-semibold text-gray-200">Jakarta, Indonesia 📍</h4>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-700 border border-white/20 overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Admin+Coffee&background=C67C4E&color=fff" alt="Avatar" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text"
            placeholder="Search coffee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#2A2A2A] text-white pl-12 pr-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-[#C67C4E]"
          />
          <span className="absolute left-4 top-3.5 opacity-50">🔍</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="px-6 -mt-16">
        {/* Promo Banner ala Image_15acdb */}
        <div className="bg-gradient-to-r from-[#C67C4E] to-[#8C4F2B] text-white p-6 rounded-3xl shadow-xl relative overflow-hidden mb-6">
          <span className="bg-[#ED4F4F] text-[10px] uppercase tracking-wider font-extrabold px-2 py-1 rounded-md">Promo</span>
          <h2 className="text-2xl font-bold mt-3 leading-tight">Buy one get<br />one FREE</h2>
          <p className="text-[11px] text-white/70 mt-1">S&K Berlaku. Berakhir hari ini.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none">
          {["All", "Hot", "Cold"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat 
                  ? "bg-[#C67C4E] text-white shadow-md shadow-[#C67C4E]/30" 
                  : "bg-white text-gray-500 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid List Item Kopi */}
        <div className="grid grid-cols-2 gap-4 mt-2">
          {filtered.map((coffee, i) => (
            <div key={i} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-50 flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-3">
                  <img src={coffee.image} alt={coffee.name} className="w-full h-full object-cover" />
                  {coffee.isPopular && (
                    <span className="absolute top-2 left-2 bg-black/50 backdrop-blur-md text-yellow-400 text-[10px] px-2 py-0.5 rounded-md font-bold">⭐ 4.8</span>
                  )}
                </div>
                <h3 className="font-bold text-sm text-gray-800 leading-tight">{coffee.name}</h3>
                <p className="text-[11px] text-gray-400 mt-0.5">Flame & Foam Blend</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-bold text-[#2F4B4E]">Rp {coffee.price.toLocaleString("id-ID")}</span>
                <button 
                  onClick={() => handleQuickAdd(coffee)}
                  className="w-8 h-8 bg-[#C67C4E] text-white rounded-xl flex items-center justify-center text-lg font-bold hover:bg-[#A6633C] transition-all"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}