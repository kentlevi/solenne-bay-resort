<template>
  <section id="experience" class="section-padding bg-white overflow-hidden scroll-mt-32">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      <!-- Content Left -->
      <div class="space-y-8 animate-on-scroll">
        <span class="text-xs uppercase tracking-[0.4em] text-luxury-gold font-medium">Fine Discovery</span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-dark leading-tight">
          Enjoy a Luxury <br />
          Experience
        </h2>
        <p class="text-luxury-light leading-relaxed max-w-xl">
          Immerse yourself in a world where luxury meets nature. Our resort is designed to provide an exclusive escape from the ordinary, offering tailored experiences that resonate with the spirit of modern coastal living. From private yacht excursions to sunset dinners on the pier.
        </p>
        <div class="pt-4">
          <button class="border-b border-luxury-dark pb-1 text-xs uppercase tracking-[0.2em] font-bold hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300">
            Read More
          </button>
        </div>
      </div>

      <!-- Image Right -->
      <div class="relative group animate-on-scroll [animation-delay:300ms]">
        <div class="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
          <img 
            src="/images/social-sunset-panorama.png" 
            alt="Experience Solenne Bay" 
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <!-- Decorative Floating Element -->
        <div class="absolute -bottom-10 -left-10 bg-luxury-gold p-8 rounded-2xl hidden md:block shadow-xl">
          <span class="block text-4xl font-serif text-white mb-2">15+</span>
          <span class="text-[10px] uppercase text-white tracking-widest font-bold">Years of Excellence</span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Simple intersection observer animation placeholders */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  animation: reveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes reveal {
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
</style>
