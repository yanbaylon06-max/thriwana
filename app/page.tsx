export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0eb]">
      {/* Nav */}
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-light tracking-widest">THRIWANA</span>
        </div>
        <button className="text-2xl">☰</button>
      </nav>

      {/* Hero */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-light mb-4">Handcrafted in Sri Lanka</h1>
        <p className="text-gray-500 mb-8">Small batches · Local textiles · Women artisans</p>
        <a href="#collection" className="bg-gray-900 text-white px-8 py-3 inline-block">
          Discover the Collection
        </a>
      </section>

      {/* Hero Image Placeholder */}
      <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">Product Photo</span>
      </div>

      {/* Collection */}
      <section id="collection" className="px-6 py-16">
        <h2 className="text-3xl font-light text-center mb-2">The Collection</h2>
        <p className="text-center text-gray-500 mb-12">Limited batch. Locally crafted. Each piece unique.</p>
        <div className="grid grid-cols-1 gap-8 max-w-lg mx-auto">
          {/* Product 1 */}
          <div className="bg-white p-4">
            <div className="w-full h-72 bg-gray-200 flex items-center justify-center mb-4">
              <span className="text-gray-400">Product Photo</span>
            </div>
            <h3 className="text-lg font-light">Olive Geometric</h3>
            <p className="text-gray-400 text-sm">Hand-block printed · Limited batch</p>
            <p className="text-[#b8860b] my-2">€85</p>
            <button className="w-full border border-gray-300 py-2 text-sm">View Details</button>
          </div>
          {/* Product 2 */}
          <div className="bg-white p-4">
            <div className="w-full h-72 bg-gray-200 flex items-center justify-center mb-4">
              <span className="text-gray-400">Product Photo</span>
            </div>
            <h3 className="text-lg font-light">Rust Stripe</h3>
            <p className="text-gray-400 text-sm">Hand-block printed · Limited batch</p>
            <p className="text-[#b8860b] my-2">€85</p>
            <button className="w-full border border-gray-300 py-2 text-sm">View Details</button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-16 text-center bg-white">
        <h2 className="text-3xl font-light mb-6">The Story</h2>
        <p className="text-gray-500 mb-4">Born in a coastal town. Built on second chances, local craft, and patience.</p>
        <p className="text-gray-500 mb-4">Each piece is made in small batches using Sri Lankan textiles, working with family workshops and women artisans in the Arugam Bay area.</p>
        <p className="text-gray-400 italic">We believe clothing should carry meaning — not just noise.</p>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-gray-400 text-sm">
        © 2025 Thriwana. All rights reserved.
      </footer>
    </main>
  );
}