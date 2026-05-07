"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navs = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Cart", href: "/cart", icon: "🛒" },
    { name: "Payment", href: "/payment", icon: "💳" },
    { name: "Profile", href: "/profile", icon: "👤" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 py-3 px-6 flex justify-around items-center z-50 max-w-md mx-auto rounded-t-3xl shadow-lg">
      {navs.map((nav) => {
        const isActive = pathname === nav.href;
        return (
          <Link key={nav.href} href={nav.href} className="flex flex-col items-center gap-1">
            <span className={`text-xl ${isActive ? "scale-110" : "opacity-60"}`}>{nav.icon}</span>
            <span className={`text-[11px] font-medium ${isActive ? "text-[#C67C4E] font-bold" : "text-gray-400"}`}>
              {nav.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}