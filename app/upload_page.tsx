"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CartService } from "@/services/cartService";
import { UserService } from "@/services/userService";

export default function UploadScreen() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (file) {
      UserService.earnPoints(CartService.getTotal());
      CartService.clearCart();
      alert("Sukses! Pesanan berhasil diproses oleh Flame & Foam.");
      router.push("/");
    } else {
      alert("Silakan pilih berkas foto bukti pembayaran terlebih dahulu!");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-800 p-6 flex flex-col justify-between max-w-md mx-auto shadow-2xl">
      <div>
        <h1 className="text-xl font-bold text-[#6F4E37] mb-1">Unggah Bukti Transaksi</h1>
        <p className="text-xs text-gray-400 mb-6">Kirimkan tangkapan layar transfer QRIS Anda</p>

        <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[200px]">
          {file ? (
            <div>
              <p className="text-xs text-green-600 font-semibold mb-2">✓ Berkas terpilih:</p>
              <p className="text-sm font-bold text-gray-700 truncate max-w-[250px]">{file.name}</p>
            </div>
          ) : (
            <div>
              <span className="text-3xl block mb-2">📸</span>
              <p className="text-xs text-gray-400 mb-4">Pilih file gambar dari galeri perangkat</p>
              <label className="bg-gray-100 text-gray-700 font-semibold text-xs px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-200">
                Pilih Foto
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
          )}
        </div>
      </div>

      <button 
        onClick={handleSubmit}
        className={`w-full py-4 rounded-2xl font-bold text-sm text-center shadow-md transition-all ${
          file ? "bg-[#6F4E37] text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
        disabled={!file}
      >
        Kirim Konfirmasi
      </button>
    </div>
  );
}