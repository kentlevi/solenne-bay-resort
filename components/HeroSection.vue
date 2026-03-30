<template>
  <section id="home" class="relative h-screen min-h-[700px] flex items-center overflow-hidden scroll-mt-32">
    <!-- Background Video -->
    <div class="absolute inset-0">
      <video
        class="absolute inset-0 hidden w-full h-full object-cover animate-fade-in md:block"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        poster="/videos/luxury-resort-drone-shot-generation-poster.png"
        aria-label="Solenne Bay luxury resort aerial video"
      >
        <source src="/videos/luxury-resort-drone-shot-generation.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
      <div class="max-w-2xl text-white">
        <span class="inline-block text-xs uppercase tracking-[0.4em] mb-6 animate-slide-up opacity-0 [animation-delay:200ms]">Welcome to Solenne Bay</span>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] animate-slide-up opacity-0 [animation-delay:400ms]">
          Unlock Your <br />
          Best Stays
        </h1>
        <p class="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light animate-slide-up opacity-0 [animation-delay:600ms]">
          Discover an unparalleled sanctuary of modern architecture and natural beauty. Your luxury journey begins here among the serene waves and golden sands.
        </p>
        
        <div class="animate-slide-up opacity-0 [animation-delay:800ms]">
          <NuxtLink to="/#booking" class="bg-luxury-gold hover:bg-white text-luxury-dark px-10 py-4 transition-all duration-300 uppercase text-xs tracking-widest font-medium shadow-xl">
            Book My Stay
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
      <div class="w-px h-12 bg-white/40 mb-4"></div>
      <span class="text-[10px] text-white uppercase tracking-[0.3em]">Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}
.animate-slide-up {
  animation: slideUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}
@keyframes fadeIn {
  from { opacity: 0; scale: 1.05; }
  to { opacity: 1; scale: 1; }
}
@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-slide-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
