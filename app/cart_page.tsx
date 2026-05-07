"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CartService, CartItem } from "./services/cartService";
import BottomNav from "./components/BottomNav";

export default function CartScreen() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems([...CartService.getCart()]);
  }, []);

  const handleRemove = (index: number) => {
    CartService.removeFromCart(index);
    setItems([...CartService.getCart()]);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-800 pb-24 max-w-md mx-auto shadow-2xl relative">
      <div className="bg-[#6F4E37] text-white p-5 sticky top-0 z-10 flex items-center gap-4 shadow-sm">
        <button onClick={() => router.back()} className="text-xl">←</button>
        <h1 className="font-bold text-lg">Keranjang Belanja</h1>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-sm">Keranjang kamu masih kosong ☕</div>
      ) : (
        <div className="p-4 space-y-3">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-xs border border-gray-100 flex gap-4 items-center justify-between">
              <div className="flex gap-3 items-center">
                <img src={item.coffee.image} className="w-14 h-14 rounded-xl object-cover" alt="" />
                <div>
                  <h4 className="font-bold text-sm">{item.coffee.name}</h4>
                  <p className="text-[10px] text-gray-400">{item.cupSize} | {item.iceLevel} | {item.sugarLevel}</p>
                  <p className="text-xs font-bold text-[#6F4E37] mt-1">Rp {item.coffee.price.toLocaleString("id-ID")} x{item.quantity}</p>
                </div>
              </div>
              <button onClick={() => handleRemove(index)} className="text-red-400 text-xs font-medium px-2 py-1 rounded-md bg-red-50 hover:bg-red-100 transition-all">
                Hapus
              </button>
            </div>
          ))}

          {/* Ringkasan & Tombol Done */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mt-6 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-bold text-gray-800">Rp {CartService.getTotal().toLocaleString("id-ID")}</span>
            </div>
            <button 
              onClick={() => router.push("/payment")}
              className="w-full bg-[#6F4E37] text-white py-3.5 rounded-xl text-center text-sm font-bold shadow-sm block hover:bg-[#5A3E2B]"
            >
              Lanjutkan Ke Pembayaran
            </button>
          </div>
        </div>
      )}
      <BottomNav />
    </div>
  );
}