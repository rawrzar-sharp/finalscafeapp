"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin" && password === "123") {
      router.push("/");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6F4E37] to-[#A1724E] flex items-center justify-center p-6 max-w-md mx-auto shadow-2xl">
      <div className="w-full bg-white rounded-3xl p-6 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#4A2C11]">Flame & Foam</h1>
          <p className="text-xs text-gray-400 mt-1">Silakan masuk ke akun barista/pelanggan Anda</p>
        </div>

        {error && <p className="text-red-500 text-xs text-center mb-4 bg-red-50 p-2 rounded-lg">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-500">Email / Username</label>
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan 'admin'"
              className="w-full border-b border-gray-200 py-2.5 focus:border-[#6F4E37] outline-none text-sm text-gray-700"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan '123'"
              className="w-full border-b border-gray-200 py-2.5 focus:border-[#6F4E37] outline-none text-sm text-gray-700"
              required
            />
          </div>

          <button type="submit" className="w-full bg-[#6F4E37] text-white py-3.5 rounded-2xl font-bold text-sm shadow-md hover:bg-[#5A3E2B] transition-all pt-3">
            Login
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Belum punya akun? <Link href="/register" className="text-[#6F4E37] font-bold hover:underline">Daftar sekarang</Link>
        </p>
      </div>
    </div>
  );
}