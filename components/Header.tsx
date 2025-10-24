"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function Header() {
  const { items, setOpen } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="border-b sticky top-0 bg-white/80 backdrop-blur z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl">
          <span className="text-amber-600">Rayora</span> Grocery
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="#categories" className="hover:text-amber-700">Categories</Link>
          <Link href="#featured" className="hover:text-amber-700">Featured</Link>
          <Link href="#contact" className="hover:text-amber-700">Contact</Link>
        </nav>
        <button
          onClick={() => setOpen(true)}
          className="relative px-4 py-2 rounded-full border hover:bg-amber-50"
        >
          Cart
          {count > 0 && (
            <span className="absolute -right-2 -top-2 text-xs bg-amber-600 text-white rounded-full w-6 h-6 grid place-items-center">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
