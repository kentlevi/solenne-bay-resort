<template>
  <section id="rooms" class="section-padding bg-white overflow-hidden scroll-mt-32">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span class="text-xs uppercase tracking-[0.4em] text-luxury-gold font-medium block mb-4">Outstanding Luxury</span>
          <h2 class="text-4xl md:text-5xl font-serif text-luxury-dark">Rooms & Suites</h2>
        </div>
        <div class="flex space-x-4">
           <button class="w-14 h-14 rounded-full border border-luxury-dark/10 flex items-center justify-center hover:bg-luxury-dark hover:text-white transition-all">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
           </button>
           <button class="w-14 h-14 rounded-full border border-luxury-dark/10 flex items-center justify-center hover:bg-luxury-dark hover:text-white transition-all">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6 6-6"/></svg>
           </button>
        </div>
      </div>
    </div>

    <!-- Horizontal Scroll Section -->
    <div class="flex overflow-x-auto space-x-8 px-6 md:px-12 pb-12 no-scrollbar scroll-smooth">
      
      <!-- Card 1 -->
      <div class="flex-none w-[350px] md:w-[450px] group cursor-pointer">
        <div class="relative overflow-hidden rounded-3xl mb-6 shadow-lg shadow-black/5 aspect-[4/5]">
          <img src="/images/room-suite.png" alt="Grand Room" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <span class="text-xs tracking-widest uppercase">From $450 / Night</span>
          </div>
        </div>
        <h3 class="text-2xl font-serif text-luxury-dark mb-2">Grand Room</h3>
        <p class="text-luxury-light text-sm uppercase tracking-widest font-medium">85 sqm · Sea View · 2 Guests</p>
      </div>

      <!-- Card 2 -->
      <div class="flex-none w-[350px] md:w-[450px] group cursor-pointer">
        <div class="relative overflow-hidden rounded-3xl mb-6 shadow-lg shadow-black/5 aspect-[4/5]">
          <img src="/images/room-deluxe-2.png" alt="Morning Suite" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           <div class="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <span class="text-xs tracking-widest uppercase">From $680 / Night</span>
          </div>
        </div>
        <h3 class="text-2xl font-serif text-luxury-dark mb-2">Morning Suite</h3>
        <p class="text-luxury-light text-sm uppercase tracking-widest font-medium">120 sqm · Garden Access · 3 Guests</p>
      </div>

      <!-- Card 3 -->
      <div class="flex-none w-[350px] md:w-[450px] group cursor-pointer">
        <div class="relative overflow-hidden rounded-3xl mb-6 shadow-lg shadow-black/5 aspect-[4/5]">
          <img src="/images/room-family-2.png" alt="Family Room" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           <div class="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <span class="text-xs tracking-widest uppercase">From $520 / Night</span>
          </div>
        </div>
        <h3 class="text-2xl font-serif text-luxury-dark mb-2">Family Room</h3>
        <p class="text-luxury-light text-sm uppercase tracking-widest font-medium">100 sqm · City View · 4 Guests</p>
      </div>

      <!-- Card 4 (New) -->
      <div class="flex-none w-[350px] md:w-[450px] group cursor-pointer">
        <div class="relative overflow-hidden rounded-3xl mb-6 shadow-lg shadow-black/5 aspect-[4/5]">
          <img src="/images/villa-ocean-luxury.png" alt="Ocean Horizon Suite" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           <div class="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <span class="text-xs tracking-widest uppercase">From $1,200 / Night</span>
          </div>
        </div>
        <h3 class="text-2xl font-serif text-luxury-dark mb-2">Ocean Horizon Suite</h3>
        <p class="text-luxury-light text-sm uppercase tracking-widest font-medium">180 sqm · Panoramic Sea · 2 Guests</p>
      </div>

      <!-- Card 5 (New) -->
      <div class="flex-none w-[350px] md:w-[450px] group cursor-pointer">
        <div class="relative overflow-hidden rounded-3xl mb-6 shadow-lg shadow-black/5 aspect-[4/5]">
          <img src="/images/villa-island-luxury.png" alt="Infinite Island Suite" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           <div class="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <span class="text-xs tracking-widest uppercase">From $1,800 / Night</span>
          </div>
        </div>
        <h3 class="text-2xl font-serif text-luxury-dark mb-2">Infinite Island Suite</h3>
        <p class="text-luxury-light text-sm uppercase tracking-widest font-medium">250 sqm · Island Private · 4 Guests</p>
      </div>

      <!-- Card 6 (New) -->
      <div class="flex-none w-[350px] md:w-[450px] group cursor-pointer">
        <div class="relative overflow-hidden rounded-3xl mb-6 shadow-lg shadow-black/5 aspect-[4/5]">
          <img src="/images/villa-showcase-1.png" alt="Private Sanctuary Suite" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           <div class="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <span class="text-xs tracking-widest uppercase">From $2,500 / Night</span>
          </div>
        </div>
        <h3 class="text-2xl font-serif text-luxury-dark mb-2">Private Sanctuary Suite</h3>
        <p class="text-luxury-light text-sm uppercase tracking-widest font-medium">350 sqm · Absolute Privacy · 2 Guests</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
