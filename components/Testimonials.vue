<template>
  <section class="relative section-padding overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img src="/images/testimonial-bg.png" alt="Resort Serenity" loading="lazy" decoding="async" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-luxury-dark/40"></div>
    </div>

    <div class="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
      <div class="max-w-4xl text-white">
        <span class="text-xs uppercase tracking-[0.4em] text-luxury-gold font-medium mb-8 block">Our Guests Story</span>
        <h2 class="text-4xl md:text-5xl font-serif leading-tight mb-16">Guest Said About <br /> Our Hotel</h2>
        
        <!-- Glass Testimonial Card -->
        <div class="glass-card p-10 md:p-16 rounded-[2.5rem] relative max-w-2xl">
          <!-- Quotes Icon -->
          <div class="absolute -top-10 left-10 w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center shadow-xl">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M14.017 21L14.017 18C14.017 14.6863 16.7033 12 20.017 12L20.017 21L14.017 21ZM4.01697 21L4.01697 18C4.01697 14.6863 6.70327 12 10.017 12L10.017 21L4.01697 21ZM20.017 10C15.5987 10 12.017 13.5817 12.017 18L12.017 23L22.017 23L22.017 18C22.017 13.5817 18.4353 10 24.017 10L20.017 10ZM10.017 10C5.59872 10 2.01697 13.5817 2.01697 18L2.01697 23L12.017 23L12.017 18C12.017 13.5817 8.43527 10 14.017 10L10.017 10Z" fill="currentColor"/></svg>
          </div>

          <div class="flex items-center space-x-1 mb-8 text-luxury-gold">
             <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>

          <p class="text-xl md:text-2xl font-serif leading-relaxed text-white mb-10 italic">
            "We had an incredible stay at Solenne Bay. The architecture is breathtaking, and the service was beyond our expectations. A true sanctuary for those seeking luxury and peace."
          </p>

          <div class="flex items-center space-x-4">
             <div class="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center uppercase font-bold text-luxury-dark tracking-tighter">SD</div>
             <div>
                <span class="block font-serif text-lg">Sarah Danielson</span>
                <span class="text-[10px] uppercase tracking-widest text-white/60">London, UK — June 2024</span>
             </div>
          </div>
        </div>

        <div class="mt-16 flex space-x-4">
           <button class="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-luxury-dark transition-all flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
           </button>
           <button class="w-12 h-12 rounded-full bg-luxury-gold text-luxury-dark hover:bg-white transition-all flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
           </button>
        </div>
      </div>
    </div>
  </section>
</template>
