"use client";
import { Product } from "@/lib/cart";
import { useCart } from "@/lib/cart";

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="border rounded-2xl overflow-hidden hover:shadow-md transition">
      <div className="aspect-[4/3] bg-gray-50 grid place-items-center">
        <img src={p.image} alt={p.name} className="max-h-full" />
      </div>
      <div className="p-3">
        <p className="font-medium">{p.name}</p>
        <p className="text-xs text-gray-500">{p.unit || "1 pc"}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold">€{p.price.toFixed(2)}</span>
          <button onClick={() => add(p)} className="px-3 py-1 rounded-full bg-amber-600 text-white hover:bg-amber-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
