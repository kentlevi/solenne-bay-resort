<script setup lang="ts">
import { ref } from 'vue'

const villas = [
  { id: 'ocean', name: 'The Ocean', image: '/images/villa-ocean-luxury.png' },
  { id: 'island', name: 'The Island', image: '/images/villa-island-luxury.png' },
  { id: 'private', name: 'The Private', image: '/images/villa-showcase-1.png' }
]

const activeVilla = ref(villas[0])
</script>

<template>
  <section class="section-padding bg-luxury-bg">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
      
      <!-- Content Left -->
      <div class="lg:col-span-1 py-12 flex flex-col justify-center">
        <span class="text-xs uppercase tracking-[0.4em] text-luxury-gold mb-6 font-medium">Villa Showcase</span>
        <h2 class="text-4xl md:text-5xl font-serif text-luxury-dark mb-12">Life Along <br /> the Coast</h2>
        
        <div class="space-y-6">
          <button 
            v-for="villa in villas" 
            :key="villa.id"
            @click="activeVilla = villa"
            class="block text-left text-xl md:text-2xl font-serif transition-all duration-300 border-l-[3px] pl-6 hover:text-luxury-gold"
            :class="activeVilla.id === villa.id ? 'text-luxury-gold border-luxury-gold' : 'text-luxury-dark/40 border-transparent'"
          >
            {{ villa.name }}
          </button>
        </div>
        
        <div class="mt-16">
          <p class="text-luxury-light leading-relaxed max-w-xs mb-8">
            Experience the ultimate privacy and luxury in our signature villas, each offering a unique connection to the landscape.
          </p>
          <NuxtLink to="/" class="group flex items-center space-x-4">
            <span class="text-xs uppercase tracking-widest font-bold group-hover:text-luxury-gold transition-colors">See Details</span>
            <div class="w-10 h-px bg-luxury-dark group-hover:bg-luxury-gold transition-all duration-300 group-hover:w-16"></div>
          </NuxtLink>
        </div>
      </div>

      <!-- Image Right -->
      <div class="lg:col-span-2 relative">
        <div class="aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl relative">
          <Transition name="fade-scale" mode="out-in">
            <img 
              :key="activeVilla.id"
              :src="activeVilla.image" 
              :alt="activeVilla.name" 
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover"
            />
          </Transition>
          <!-- Navigation Arrows Overlay (Simulated) -->
          <div class="absolute bottom-8 right-8 flex space-x-4">
            <button class="w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-luxury-dark transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button class="w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-luxury-dark transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.fade-scale-leave-to {
  opacity: 0;
}
</style>
