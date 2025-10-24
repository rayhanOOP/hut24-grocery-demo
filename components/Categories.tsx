const cats = [
  { name: "Rice", href: "#featured" },
  { name: "Snacks", href: "#featured" },
  { name: "Spices", href: "#featured" },
  { name: "Beverages", href: "#featured" },
  { name: "Frozen", href: "#featured" },
];

export default function Categories() {
  return (
    <section id="categories" className="container py-10">
      <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {cats.map(c => (
          <a key={c.name} href={c.href} className="border rounded-xl p-4 hover:bg-amber-50 text-center">
            {c.name}
          </a>
        ))}
      </div>
    </section>
  );
}
