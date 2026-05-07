"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Akun ${name} Berhasil Terdaftar!`);
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6F4E37] to-[#A1724E] flex items-center justify-center p-6 max-w-md mx-auto shadow-2xl">
      <div className="w-full bg-white rounded-3xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-[#4A2C11] text-center mb-1">Daftar Akun</h2>
        <p className="text-xs text-gray-400 text-center mb-6">Buat akun kopi kustom Anda sendiri</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            type="text" 
            placeholder="Nama Lengkap" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-[#6F4E37]"
            required
          />
          <input 
            type="email" 
            placeholder="Alamat Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-[#6F4E37]"
            required
          />
          <input 
            type="password" 
            placeholder="Password Baru" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 p-3 rounded-xl text-sm outline-none focus:border-[#6F4E37]"
            required
          />

          <button type="submit" className="w-full bg-[#6F4E37] text-white py-3.5 rounded-2xl font-bold text-sm mt-2 shadow-sm">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}