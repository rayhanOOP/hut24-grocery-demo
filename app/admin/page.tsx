"use client";
import { useEffect, useMemo, useState } from "react";
import baseProducts from "../products.json";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  unit?: string;
};

const STORAGE_KEY = "rayora_admin_products_v1";
const ACCESS_KEY = "demo"; // simple guard. Append ?key=demo to access

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const urlKey = new URLSearchParams(window.location.search).get("key");
    if (urlKey === ACCESS_KEY) setAuth(true);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setProducts(saved ? JSON.parse(saved) : baseProducts as Product[]);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const filtered = useMemo(() => {
    if (!query) return products;
    return products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  }, [products, query]);

  const addNew = () => {
    const id = prompt("ID (slug-like, unique):", "");
    if (!id) return;
    setProducts(prev => [{ id, name: "New Product", price: 1.0, image: "/images/spices.svg", category: "Snacks", unit: "1 pc" }, ...prev]);
  };

  const remove = (id: string) => {
    if (!confirm("Delete this product?")) return;
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(products, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "products.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!auth) {
    return (
      <div className="container py-24">
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="mt-4">Access denied. Append <code>?key=demo</code> to the URL to view the demo admin.</p>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Admin · Products</h1>
        <div className="flex gap-2">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." className="border rounded px-3 py-2" />
          <button onClick={addNew} className="px-4 py-2 rounded bg-amber-600 text-white">Add New</button>
          <button onClick={exportJson} className="px-4 py-2 rounded border">Export JSON</button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Price (€)</th>
              <th className="p-2">Image</th>
              <th className="p-2">Category</th>
              <th className="p-2">Unit</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, idx) => (
              <tr key={p.id} className="border-b">
                <td className="p-2">{p.id}</td>
                <td className="p-2"><input className="border rounded px-2 py-1 w-64" value={p.name} onChange={e => {
                  const v = e.target.value; setProducts(prev => prev.map((x,i)=> i===products.indexOf(p)? {...x, name:v}: x));
                }} /></td>
                <td className="p-2"><input type="number" step="0.01" className="border rounded px-2 py-1 w-24" value={p.price} onChange={e => {
                  const v = parseFloat(e.target.value||"0"); setProducts(prev => prev.map((x,i)=> i===products.indexOf(p)? {...x, price:v}: x));
                }} /></td>
                <td className="p-2"><input className="border rounded px-2 py-1 w-64" value={p.image} onChange={e => {
                  const v = e.target.value; setProducts(prev => prev.map((x,i)=> i===products.indexOf(p)? {...x, image:v}: x));
                }} /></td>
                <td className="p-2"><input className="border rounded px-2 py-1 w-40" value={p.category} onChange={e => {
                  const v = e.target.value; setProducts(prev => prev.map((x,i)=> i===products.indexOf(p)? {...x, category:v}: x));
                }} /></td>
                <td className="p-2"><input className="border rounded px-2 py-1 w-28" value={p.unit || ""} onChange={e => {
                  const v = e.target.value; setProducts(prev => prev.map((x,i)=> i===products.indexOf(p)? {...x, unit:v}: x));
                }} /></td>
                <td className="p-2">
                  <button onClick={()=>remove(p.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Note: This is a demo admin. Changes persist in your browser (localStorage). Use "Export JSON" and replace <code>app/products.json</code> in the repo for deployment.
      </p>
    </div>
  );
}
