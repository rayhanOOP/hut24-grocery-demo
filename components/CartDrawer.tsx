"use client";
import { useCart } from "@/lib/cart";

export default function CartDrawer() {
  const { items, remove, total, open, setOpen, clear } = useCart();

  const checkout = async () => {
    try {
      const payload = { items: items.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })) };
      const res = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert(data?.error || "Configure Stripe keys in .env.local to enable test checkout.");
      }
    } catch (e) {
      alert("Checkout error. See console.");
      console.error(e);
    }
  };
  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 transition ${open ? "opacity-100" : "opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      {/* drawer */}
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white shadow-xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 border-b flex items-center justify-between">
          <p className="font-semibold">Your Cart</p>
          <button onClick={() => setOpen(false)} className="text-gray-500">Close</button>
        </div>
        <div className="p-4 space-y-3 overflow-auto h-[calc(100%-160px)]">
          {items.length === 0 && <p className="text-sm text-gray-500">Your cart is empty.</p>}
          {items.map(i => (
            <div key={i.id} className="flex gap-3 items-center border-b pb-3">
              <img src={i.image} alt={i.name} className="w-16 h-16 object-contain bg-gray-50 rounded" />
              <div className="flex-1">
                <p className="font-medium">{i.name}</p>
                <p className="text-xs text-gray-500">Qty: {i.qty}</p>
                <p className="text-sm font-semibold mt-1">€{(i.price * i.qty).toFixed(2)}</p>
              </div>
              <button onClick={() => remove(i.id)} className="text-xs px-2 py-1 border rounded">Remove</button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium">Total</span>
            <span className="font-semibold">€{total.toFixed(2)}</span>
          </div>
          <button onClick={checkout} className="w-full py-2 rounded-full bg-amber-600 text-white mb-2">Checkout (Stripe Test)</button>
          <button onClick={clear} className="w-full py-2 rounded-full border">Clear cart</button>
        </div>
      </aside>
    </div>
  );
}
