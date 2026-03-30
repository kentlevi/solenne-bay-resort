<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
let frameId = 0

const handleScroll = () => {
  if (frameId) {
    return
  }

  frameId = window.requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 50
    frameId = 0
  })
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (frameId) {
    window.cancelAnimationFrame(frameId)
  }
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6']"
  >
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
      <!-- Left Navigation -->
      <div class="hidden md:flex items-center space-x-10">
        <NuxtLink to="/#experience" class="text-[11px] tracking-[0.25em] uppercase transition-colors" :class="isScrolled ? 'text-luxury-dark hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'">Experience</NuxtLink>
        <NuxtLink to="/#rooms" class="text-[11px] tracking-[0.25em] uppercase transition-colors" :class="isScrolled ? 'text-luxury-dark hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'">Rooms</NuxtLink>
        <NuxtLink to="/#offers" class="text-[11px] tracking-[0.25em] uppercase transition-colors" :class="isScrolled ? 'text-luxury-dark hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'">Offers</NuxtLink>
      </div>

      <!-- Center Logo -->
      <NuxtLink to="/#home" class="text-2xl font-serif tracking-[0.4em] uppercase" :class="isScrolled ? 'text-luxury-dark' : 'text-white'">
        Solenne Bay
      </NuxtLink>

      <!-- Right Navigation -->
      <div class="flex items-center space-x-10">
        <div class="hidden md:flex items-center space-x-10">
          <NuxtLink to="/#blog" class="text-[11px] tracking-[0.25em] uppercase transition-colors" :class="isScrolled ? 'text-luxury-dark hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'">Blog</NuxtLink>
          <NuxtLink to="/#contact" class="text-[11px] tracking-[0.25em] uppercase transition-colors" :class="isScrolled ? 'text-luxury-dark hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'">Contact</NuxtLink>
        </div>
        <NuxtLink 
          to="/#booking"
          class="px-8 py-2.5 border transition-all duration-300 text-[10px] tracking-widest uppercase font-bold"
          :class="isScrolled 
            ? 'border-luxury-dark text-luxury-dark hover:bg-luxury-dark hover:text-white' 
            : 'border-white text-white hover:bg-white hover:text-luxury-dark'"
        >
          Book Now
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
