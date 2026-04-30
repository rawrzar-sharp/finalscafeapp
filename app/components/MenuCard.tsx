// app/components/MenuCard.tsx
import Image from "next/image";

interface MenuProps {
  name: string;
  price: number;
  desc: string;
  image: string;
  onAdd: () => void;
}

export default function MenuCard({ name, price, desc, image, onAdd }: MenuProps) {
  return (
    <div className="flex flex-col items-center text-center group bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/95 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
          Rp {price.toLocaleString("id-ID")}
        </div>
        <button 
          onClick={onAdd}
          className="absolute bottom-3 right-3 bg-[#e67e22] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg hover:bg-[#d35400] transition-transform active:scale-90"
        >
          +
        </button>
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-[11px] text-gray-500 leading-tight px-2 line-clamp-2">{desc}</p>
    </div>
  );
}