"use client";

interface CategoryBarProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryBar({ selected, onSelect }: CategoryBarProps) {
  const categories = ["All", "Hot", "Cold", "Signature"];

  return (
    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none mt-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
            selected === cat
              ? "bg-[#C67C4E] text-white shadow-md shadow-[#C67C4E]/30"
              : "bg-white text-gray-500 border border-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}