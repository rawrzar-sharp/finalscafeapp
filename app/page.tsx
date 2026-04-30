"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import MenuCard from "./components/MenuCard";
import Footer from "./components/Footer";

// Data Menu Terintegrasi dengan Foto [source: 9]
const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Latte", price: 38000, img: "/images/photo (1).jfif", desc: "Espresso, vanilla syrup, steamed air cold milk, and topped with milk foam." },
      { name: "Caramel Macchiato", price: 42000, img: "/images/photo (6).jfif", desc: "An espresso, steamed milk, and topped with a thin layer of foam." },
      { name: "Espresso", price: 15000, img: "/images/photo (10).jfif", desc: "Forcing hot water under high pressure through ground coffee beans." },
      { name: "Cappuccino", price: 35000, img: "/images/photo (11).jfif", desc: "Espresso, steamed milk and airy foam — timeless." },
      { name: "Americano", price: 21000, img: "/images/photo (3).jfif", desc: "One or two shots of espresso with hot water." },
      { name: "Affogato", price: 45000, img: "/images/photo (2).jfif", desc: "One scoop of vanilla ice cream with a shot of hot espresso." },
      { name: "Flat White", price: 37000, img: "/images/photo (5).jfif", desc: "Ristretto shots with thin, silky milk — smooth texture." },
      { name: "Long Black", price: 29000, img: "/images/photo (13).jfif", desc: "Two shots of espresso (double shot) over hot water." },
    ],
  },
  {
    category: "Dessert",
    items: [
      { name: "Croissant Bandeng", price: 42000, img: "/images/photo (14).jfif", desc: "Buttery croissant, smoked milkfish pâté, pickled shallots" },
      { name: "Klepon Cake", price: 35000, img: "/images/photo (4).jfif", desc: "Pandan sponge, palm sugar filling, desiccated coconut" },
    ],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [cart, setCart] = useState<{ name: string; price: number; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  const addToCart = (name: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) return prev.map((i) => i.name === name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { name, price, qty: 1 }];
    });
  };

  return (
    <div className="relative min-h-screen bg-[#faf7f2] font-sans text-gray-800 scroll-smooth">
      <Particles />
      
      {/* Integrasi Navbar Baru */}
      <Navbar cartCount={cart.reduce((s, i) => s + i.qty, 0)} onCartClick={() => setCartOpen(true)} />

      {/* Hero Section dengan Background Image */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[60px] md:rounded-b-[120px] shadow-2xl">
        <Image 
          src="/images/photo (12).jfif" 
          alt="Hero Background" 
          fill 
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className={`relative z-20 text-center px-6 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Palmerah, Jakarta Barat
          </div>
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tighter mb-4">
            Flame <span className="text-[#e67e22]">&</span> Foam
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            Where bold fire meets velvety foam. Experience Jakarta's finest craft coffee in every sip.
          </p>
          <button 
            onClick={() => menuRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="mt-10 bg-[#d35400] hover:bg-[#ba4a00] text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
          >
            Explore Menu
          </button>
        </div>
      </section>

      {/* Menu Tabs */}
      <section ref={menuRef} className="max-w-6xl mx-auto px-6 mt-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Specialty Menu</h2>
        <div className="flex bg-white border border-gray-200 rounded-full p-1.5 w-fit mx-auto shadow-sm mb-16">
          {menuItems.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === i ? "bg-[#7a3e14] text-white shadow-md" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Grid Menu menggunakan MenuCard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {menuItems[activeTab].items.map((item) => (
            <MenuCard 
              key={item.name} 
              {...item} 
              image={item.img} 
              onAdd={() => addToCart(item.name, item.price)} 
            />
          ))}
        </div>
      </section>

      {/* Section Tasty Dessert dengan Foto Campuran (photo 9) */}
      <section className="max-w-6xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl group">
           <Image 
            src="/images/photo (9).jfif" 
            alt="Dessert Selection" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700"
           />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-[#d35400] font-bold tracking-[0.3em] text-sm mb-2">SWEET SENSATION</p>
          <h2 className="text-4xl font-bold mb-6">OUR TASTY DESSERT</h2>
          <div className="h-1.5 w-32 bg-[#4a2408] mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
            "We don't do shortcuts. Real ingredients are more delicious."
          </p>
          <p className="text-gray-500 leading-relaxed">
            From our signature Klepon Cake to artisanal pastries, every bite is crafted with premium Madagascar vanilla beans and farm-fresh organic cream.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}