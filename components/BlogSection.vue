<template>
  <section id="blog" class="section-padding bg-white scroll-mt-32">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
           <span class="text-xs uppercase tracking-[0.4em] text-luxury-gold font-medium block mb-4">Inside Solenne Bay</span>
           <h2 class="text-4xl md:text-5xl font-serif text-luxury-dark">Latest Blog</h2>
        </div>
        <button class="px-8 py-3 border border-luxury-dark text-xs uppercase tracking-widest font-bold hover:bg-luxury-dark hover:text-white transition-all">
           View All Posts
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Featured Post left -->
        <div class="lg:col-span-7 group cursor-pointer">
           <div class="aspect-[16/10] overflow-hidden rounded-3xl mb-8 shadow-xl">
              <img src="/images/resort-coast-1.png" alt="Blog Featured" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
           </div>
           <div class="space-y-4 max-w-2xl px-2">
              <span class="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-bold">Resort Life — May 24, 2024</span>
              <h3 class="text-3xl font-serif text-luxury-dark leading-tight hover:text-luxury-gold transition-colors">The Ultimate Guide to Hotel Amenities You Should Not Miss</h3>
              <p class="text-luxury-light leading-relaxed">Discover the hidden gems of Solenne Bay, from our private wine cellar to the exclusive underwater meditation chamber. We believe every stay should be unforgettable...</p>
           </div>
        </div>

        <!-- Side posts right -->
        <div class="lg:col-span-5 space-y-12">
           <!-- Post 1 -->
           <div class="flex gap-6 group cursor-pointer">
              <div class="flex-none w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg">
                 <img src="/images/social-resort-1.png" alt="Blog Post" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div class="flex flex-col justify-center">
                 <span class="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-bold mb-2">Gastronomy</span>
                 <h4 class="text-xl font-serif text-luxury-dark hover:text-luxury-gold transition-colors line-clamp-2">A Day in the Life of a Boutique Hotel Chef</h4>
                 <p class="text-luxury-light text-sm mt-3 hidden md:block">Meet Chef Adrian, the creative force behind our award-winning menu...</p>
              </div>
           </div>
           <!-- Post 2 -->
           <div class="flex gap-6 group cursor-pointer">
              <div class="flex-none w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg">
                 <img src="/images/room-deluxe-2.png" alt="Blog Post" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div class="flex flex-col justify-center">
                 <span class="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-bold mb-2">Architecture</span>
                 <h4 class="text-xl font-serif text-luxury-dark hover:text-luxury-gold transition-colors line-clamp-2">How We Blend Modern Design with Tropical Serenity</h4>
                 <p class="text-luxury-light text-sm mt-3 hidden md:block">The philosophy behind the unique curved structures of Solenne Bay...</p>
              </div>
           </div>
           <!-- Post 3 -->
           <div class="flex gap-6 group cursor-pointer">
              <div class="flex-none w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg">
                 <img src="/images/social-resort-2.png" alt="Blog Post" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div class="flex flex-col justify-center">
                 <span class="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-bold mb-2">Travel Tips</span>
                 <h4 class="text-xl font-serif text-luxury-dark hover:text-luxury-gold transition-colors line-clamp-2">Sustainable Luxury: Our Commitment to the Coast</h4>
                 <p class="text-luxury-light text-sm mt-3 hidden md:block">Discover our eco-friendly initiatives and plastic-free mission...</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>
