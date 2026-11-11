const ClothingDesign = () => {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#1a1a1a] antialiased">
      {/* Announcement bar */}
      <div className="flex items-center justify-between bg-[#ECE8E0] px-6 py-2.5">
        <button type="button" aria-label="Previous announcement" className="text-neutral-700">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5-7 7 7 7" /></svg>
        </button>
        <p className="text-center text-[11px] uppercase tracking-[0.18em] text-neutral-700">
          Complimentary shipping on orders over $150
        </p>
        <button type="button" aria-label="Next announcement" className="text-neutral-700">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 5 7 7-7 7" /></svg>
        </button>
      </div>

      {/* Header */}
      <header className="border-b border-neutral-200/70 px-6 pb-4 pt-5 md:px-14">
        <div className="grid grid-cols-3 items-center">
          {/* Search input */}
          <div className="flex items-center gap-3">
            <svg className="h-5 w-5 shrink-0 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            <input
              type="text"
              placeholder="Search for products..."
              className="hidden w-full max-w-[260px] bg-transparent text-sm text-neutral-800 placeholder:text-neutral-500 focus:outline-none sm:block"
            />
          </div>

          <h1 className="text-center font-serif text-4xl tracking-tight">fashio</h1>

          <div className="flex items-center justify-end gap-6">
            <button type="button" aria-label="Account">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
            </button>
            <button type="button" aria-label="Cart" className="relative">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#111] text-[10px] text-white">0</span>
            </button>
          </div>
        </div>

        <nav className="mt-3 flex items-center justify-center gap-12 text-sm text-neutral-500">
          <button type="button" className="border-b border-neutral-900 pb-1 text-neutral-900">Clothing</button>
          <button type="button" className="pb-1 hover:text-neutral-900">Accessories</button>
          <button type="button" className="pb-1 hover:text-neutral-900">Lookbook</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative grid min-h-[460px] grid-cols-1 overflow-hidden bg-[#E9E5DE] md:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-28">
          <p className="mb-6 text-[11px] uppercase tracking-[0.25em] text-neutral-600">Spring Collection</p>
          <h2 className="font-serif text-5xl leading-[1.1] md:text-6xl">
            Refined Essentials
            <br />
            for Modern Men.
          </h2>
          <p className="mt-5 text-lg leading-snug text-neutral-700">
            Timeless pieces. Everyday elegance.
            <br />
            Designed for a more intentional wardrobe.
          </p>
          <button type="button" className="mt-9 inline-flex w-fit items-center gap-2 bg-[#111] px-9 py-4 text-sm text-white">
            Shop Now
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>

          <div className="absolute bottom-6 left-6 flex items-center gap-4 text-xs text-neutral-600 md:left-28">
            <span className="text-neutral-900">01</span>
            <span className="h-px w-10 bg-neutral-800" />
            <span>02</span>
            <span>03</span>
          </div>
        </div>

        <div className="relative min-h-[320px]">
          {/* Replace src with an Unsplash male model image URL */}
          <img
            src="https://placehold.co/1000x1000/E9E5DE/555555?text=Male+model+image"
            alt="Male model wearing a cream knit polo"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Product card */}
      <section className="px-6 py-14 md:px-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className="w-full max-w-[280px]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E7E2DA]">
              {/* Replace src with an Unsplash male model image URL */}
              <img
                src="https://placehold.co/560x700/E7E2DA/555555?text=Male+model+image"
                alt="Male model wearing a Textured Knit Polo"
                className="h-full w-full object-cover"
              />
              <button type="button" aria-label="Add to wishlist" className="absolute right-3 top-3 text-neutral-800">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" /></svg>
              </button>
            </div>
            <p className="mt-3.5 text-[13px] text-neutral-800">Textured Knit Polo</p>
            <p className="mt-2 text-[13px] text-neutral-800">$89</p>
            <div className="mt-3 flex items-center gap-2">
              <button type="button" aria-label="Sand" className="h-3.5 w-3.5 rounded-full bg-[#B8A58C] ring-1 ring-neutral-300 ring-offset-2 ring-offset-[#F8F5EF]" />
              <button type="button" aria-label="Black" className="h-3.5 w-3.5 rounded-full bg-[#111]" />
              <button type="button" aria-label="Charcoal" className="h-3.5 w-3.5 rounded-full bg-[#1f1f1f]" />
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/70 px-6 py-10 md:px-14">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="font-serif text-3xl tracking-tight">fashio</h2>

          <div className="flex items-center gap-8 text-sm text-neutral-600">
            <button type="button" className="hover:text-neutral-900">Clothing</button>
            <button type="button" className="hover:text-neutral-900">Accessories</button>
            <button type="button" className="hover:text-neutral-900">Lookbook</button>
          </div>

          <p className="text-xs text-neutral-500">© 2026 fashio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ClothingDesign;