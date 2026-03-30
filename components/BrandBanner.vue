<template>
  <section class="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
    <!-- Background Video -->
    <div class="absolute inset-0">
      <img
        src="/images/brand-banner.png"
        alt="Solenne Bay resort aerial poster"
        class="w-full h-full object-cover"
        decoding="async"
      />
      <video
        class="absolute inset-0 w-full h-full object-cover filter brightness-[0.8]"
        autoplay
        muted
        loop
        playsinline
        preload="none"
        poster="/images/brand-banner.png"
        aria-label="Solenne Bay resort aerial video"
      >
        <source src="/videos/luxury-resort-drone-shot-generation-2.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
    </div>

    <!-- Logo Overlay -->
    <div class="relative z-10 text-center animate-fade-in">
      <h2 class="text-white text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-[0.4em] uppercase opacity-90 select-none">
        Solenne Bay
      </h2>
      <div class="mt-4 flex items-center justify-center space-x-6 text-white/70">
        <div class="w-12 h-px bg-white/30"></div>
        <span class="text-xs uppercase tracking-[0.5em] font-light">Coastal Retreat</span>
        <div class="w-12 h-px bg-white/30"></div>
      </div>
    </div>

    <!-- Video Play Button Decor -->
    <div class="absolute bottom-12 flex items-center space-x-4 text-white/50 animate-pulse">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3l14 9-14 9V3z"/></svg>
       <span class="text-[10px] uppercase tracking-[0.2em]">Live Tour</span>
    </div>
  </section>
</template>
