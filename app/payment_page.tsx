"use client";
import { useRouter } from "next/navigation";
import { CartService } from "./services/cartService";
import { UserService } from "./services/userService";

export default function PaymentScreen() {
  const router = useRouter();
  const total = CartService.getTotal();

  const handleConfirmPayment = (method: string) => {
    if (method === "QRIS") {
      router.push("/checkout_page"); // Ubah path menyesuaikan nama file kamu
    } else {
      // Metode manual / Cash
      UserService.earnPoints(total);
      CartService.clearCart();
      alert("Pesanan Sukses Dibuat! Poin Anda Telah Ditambahkan.");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-gray-800 p-6 max-w-md mx-auto shadow-2xl">
      <h1 className="text-xl font-bold text-[#6F4E37] mb-2">Pilih Tipe Pesanan</h1>
      <p className="text-xs text-gray-400 mb-6">Total Pembayaran: <strong className="text-gray-800">Rp {total.toLocaleString("id-ID")}</strong></p>

      {/* Pilihan Order Type */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button onClick={() => alert("Dine In Dipilih")} className="bg-white p-4 rounded-2xl border border-gray-200 text-center hover:border-[#6F4E37] transition-all">
          <span className="text-2xl block mb-2">🍽️</span>
          <span className="text-xs font-bold block">Dine In</span>
          <span className="text-[10px] text-gray-400">Makan di tempat</span>
        </button>
        <button onClick={() => alert("Takeaway Dipilih")} className="bg-white p-4 rounded-2xl border border-gray-200 text-center hover:border-[#6F4E37] transition-all">
          <span className="text-2xl block mb-2">🛍️</span>
          <span className="text-xs font-bold block">Takeaway</span>
          <span className="text-[10px] text-gray-400">Bawa Pulang</span>
        </button>
      </div>

      {/* Pilihan Metode Transaksi */}
      <h2 className="text-sm font-bold text-gray-700 mb-3">Metode Pembayaran</h2>
      <div className="space-y-3">
        <button onClick={() => handleConfirmPayment("QRIS")} className="w-full bg-white p-4 rounded-2xl border border-gray-200 flex justify-between items-center text-left">
          <div>
            <span className="text-xs font-bold block">QRIS Digital</span>
            <span className="text-[10px] text-gray-400">Gopay, OVO, Dana, LinkAja</span>
          </div>
          <span className="text-lg">📱</span>
        </button>
        <button onClick={() => handleConfirmPayment("CASH")} className="w-full bg-white p-4 rounded-2xl border border-gray-200 flex justify-between items-center text-left">
          <div>
            <span className="text-xs font-bold block">Bayar Di Kasir (Cash)</span>
            <span className="text-[10px] text-gray-400">Langsung tunai di meja barista</span>
          </div>
          <span className="text-lg">💵</span>
        </button>
      </div>
    </div>
  );
}