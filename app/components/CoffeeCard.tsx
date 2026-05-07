"use client";
import Image from "next/image";

interface CoffeeCardProps {
  id?: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}

export default function CoffeeCard({ name, price, image, rating = 4.8 }: CoffeeCardProps) {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-50">
      <div className="relative w-full aspect-square mb-3 bg-gray-100 rounded-xl overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
        <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-lg flex items-center gap-1">
          ⭐ {rating}
        </div>
      </div>
      <h3 className="font-bold text-gray-800 text-sm leading-tight">{name}</h3>
      <p className="text-gray-400 text-[10px] mb-3 mt-1">Flame & Foam Blend</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm text-[#2F4B4E]">Rp {price.toLocaleString("id-ID")}</span>
        <button className="bg-[#C67C4E] text-white w-8 h-8 rounded-xl flex items-center justify-center hover:scale-95 transition-transform font-bold text-lg">
          +
        </button>
      </div>
    </div>
  );
}