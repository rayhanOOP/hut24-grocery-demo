import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import products from "./products.json";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <section id="featured" className="container py-10">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
      <Footer />
      <CartDrawer />
    </main>
  );
}
