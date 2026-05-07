"use client";
import { useState, useEffect } from "react";
import { UserService } from "./services/userService";
import BottomNav from "./components/BottomNav";

export default function ProfileScreen() {
  const [points, setPoints] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({ name: "Admin Coffee", email: "admin@coffee.com" });

  useEffect(() => {
    setPoints(UserService.getPoints());
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-800 pb-24 max-w-md mx-auto shadow-2xl relative">
      {/* Header Profile Premium */}
      <div className="bg-[#6F4E37] text-white p-6 pt-8 rounded-b-[32px] text-center shadow-sm">
        <div className="w-20 h-20 rounded-full bg-white/20 mx-auto border-2 border-white/40 overflow-hidden mb-3">
          <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=A1724E&color=fff`} alt="Avatar" />
        </div>
        
        {isEditing ? (
          <div className="space-y-2 max-w-[200px] mx-auto">
            <input 
              type="text" 
              value={profile.name} 
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="bg-black/20 text-white text-center rounded-md text-sm px-2 py-1 w-full outline-none border border-white/20"
            />
          </div>
        ) : (
          <>
            <h2 className="text-lg font-bold">{profile.name}</h2>
            <p className="text-xs text-white/70">{profile.email}</p>
          </>
        )}

        <button 
          onClick={() => setIsEditing(!isEditing)} 
          className="mt-4 text-[11px] uppercase tracking-wider font-bold bg-white/20 px-3 py-1.5 rounded-full text-white/90 hover:bg-white/30"
        >
          {isEditing ? "✓ Simpan Data" : "✏️ Edit Profile"}
        </button>
      </div>

      <div className="p-6">
        {/* Loyalty Poin Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-400 block font-medium">Flame & Foam Loyalty Points</span>
            <span className="text-2xl font-black text-[#6F4E37] mt-1 block">{points} <span className="text-xs font-semibold text-gray-400">Pts</span></span>
          </div>
          <span className="text-3xl">☕</span>
        </div>

        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-8 mb-3">Ketentuan Member</h3>
        <p className="text-xs text-gray-500 leading-relaxed bg-white p-4 rounded-xl border border-gray-100">
          Kumpulkan poin setiap kali kamu melakukan pemesanan minuman favoritmu! Setiap transaksi kelipatan **Rp 10.000** bernilai **1 Poin**. Tukarkan poin dengan potongan diskon menarik di kasir.
        </p>
      </div>
      <BottomNav />
    </div>
  );
}