export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-emerald-50">
      <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Authentic South Asian Groceries, <span className="text-amber-600">Delivered</span> in Germany
          </h1>
          <p className="mt-4 text-gray-600">
            Shop rice, spices, snacks, beverages, and frozen essentials. Fresh, fast, and fairly priced.
          </p>
          <a href="#featured" className="inline-block mt-6 px-6 py-3 rounded-full bg-amber-600 text-white hover:bg-amber-700">Shop Featured</a>
        </div>
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <img src="/images/rice.svg" className="rounded-xl shadow" alt="Rice" />
          <img src="/images/spices.svg" className="rounded-xl shadow" alt="Spices" />
          <img src="/images/biscuits.svg" className="rounded-xl shadow" alt="Biscuits" />
          <img src="/images/noodles.svg" className="rounded-xl shadow" alt="Noodles" />
          <img src="/images/beverage.svg" className="rounded-xl shadow" alt="Beverage" />
          <img src="/images/frozen.svg" className="rounded-xl shadow" alt="Frozen" />
        </div>
      </div>
    </section>
  );
}
