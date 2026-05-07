"use client";
import { useRouter } from "next/navigation";

export default function CheckoutScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center justify-center text-center max-w-md mx-auto shadow-2xl">
      <h1 className="text-lg font-bold text-gray-800 mb-2">Pembayaran QRIS</h1>
      <p className="text-xs text-gray-400 mb-6">Silakan pindai kode QR di bawah ini untuk membayar</p>

      {/* API Generator QR Code bawaan file dart */}
      <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-6 shadow-xs">
        <img 
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CoffeeAppPayment" 
          alt="QR Code Pembayaran"
          className="w-48 h-48"
        />
      </div>

      <button 
        onClick={() => router.push("/upload")}
        className="w-full bg-[#6F4E37] text-white py-3.5 rounded-2xl font-bold text-sm shadow-sm hover:bg-[#5A3E2B] transition-all"
      >
        Saya Sudah Bayar
      </button>
    </div>
  );
}