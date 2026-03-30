<template>
  <section id="offers" class="section-padding bg-luxury-bg scroll-mt-32">
    <div class="container-custom">
      <div class="text-center mb-16">
        <span class="text-xs uppercase tracking-[0.4em] text-luxury-gold font-medium mb-4 block">Special Selection</span>
        <h2 class="text-4xl md:text-5xl font-serif text-luxury-dark">Package Discount Offer</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Large Offer Card -->
        <div class="lg:col-span-2 relative group overflow-hidden rounded-[3rem] h-[500px] cursor-pointer shadow-2xl">
           <img src="/images/offer-vip-jet.png" alt="Luxury Escape" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
           <div class="absolute bottom-12 left-12 right-12 text-white">
              <span class="inline-block px-4 py-1 bg-luxury-gold text-treatment-dark text-[10px] items-center font-bold uppercase tracking-widest rounded-full mb-6 italic">Featured</span>
              <h3 class="text-4xl font-serif mb-4">Exclusive VIP <br /> Experience</h3>
              <p class="text-white/70 max-w-md leading-relaxed mb-8">Enjoy a 5-night stay in our presidential suite with private jets, personal butlers, and bespoke dinner experiences on the pier.</p>
              <button class="w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-luxury-dark rounded-full flex items-center justify-center transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
           </div>
        </div>

        <!-- Small Offer Card 1 -->
        <div class="relative group overflow-hidden rounded-[3rem] h-[500px] cursor-pointer shadow-xl">
           <img src="/images/blog-resort-1.png" alt="Family Vacation" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
           <div class="absolute bottom-12 left-10 right-10 text-white">
              <span class="text-xs uppercase tracking-widest text-luxury-gold mb-3 block">For Families</span>
              <h3 class="text-3xl font-serif mb-6">Family Vacation <br /> Package</h3>
               <button class="w-10 h-10 border border-white/30 hover:bg-white text-white hover:text-luxury-dark rounded-full flex items-center justify-center transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
           </div>
        </div>

        <!-- Row 2 Card 1 -->
        <div class="relative group overflow-hidden rounded-[3rem] h-[350px] cursor-pointer shadow-xl">
           <img src="/images/social-resort-1.png" alt="All Inclusive" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
           <div class="absolute bottom-10 left-10 text-white">
              <span class="text-xs uppercase tracking-widest text-luxury-gold mb-2 block">All Inclusive</span>
              <h3 class="text-2xl font-serif">All-Inclusive <br /> Retreat</h3>
           </div>
        </div>

        <!-- Row 2 Card 2 -->
        <div class="lg:col-span-2 relative group overflow-hidden rounded-[3rem] h-[350px] cursor-pointer shadow-xl">
           <img src="/images/resort-coast-1.png" alt="Luxury Escape" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
           <div class="absolute bottom-10 left-12 text-white">
              <span class="text-xs uppercase tracking-widest text-luxury-gold mb-2 block">Limited Time</span>
              <h3 class="text-2xl font-serif">Luxury Escape Package</h3>
           </div>
        </div>

      </div>
    </div>
  </section>
</template>
