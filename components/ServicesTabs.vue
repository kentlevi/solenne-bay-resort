<script setup lang="ts">
import { ref } from 'vue'

const services = [
  { 
    id: 'spa', 
    title: 'World-Class Spa', 
    name: 'Wellness Retreat', 
    desc: 'Indulge in our signature spa treatments, where ancient techniques meet modern wellness. Our expert therapists use only the finest natural ingredients to rejuvenate your mind and body.',
    image: '/images/hero-bg.png'
  },
  { 
    id: 'dining', 
    title: 'Exquisite Dining', 
    name: 'Gastronomy Pier', 
    desc: 'From fresh seafood to international delicacies, our chefs take you on a culinary journey. Enjoy world-class dining with panoramic ocean views and exceptional service.',
    image: '/images/experience-pool.png'
  },
  { 
    id: 'fitness', 
    title: 'Modern Fitness', 
    name: 'Coastal Gym', 
    desc: 'Stay active even on vacation with our state-of-the-art fitness center. Featuring high-end equipment and personal trainers, all overlooking the serene coastal landscape.',
    image: '/images/room-suite.png'
  },
  { 
    id: 'concierge', 
    title: 'Private Concierge', 
    name: 'Tailored Stays', 
    desc: 'Our dedicated concierge team is at your service 24/7. From private yacht charters to exclusive island tours, we make your luxury dreams a reality.',
    image: '/images/villa-showcase-1.png'
  }
]

const activeService = ref(services[0])
</script>

<template>
  <section class="section-padding bg-luxury-bg">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12">
      <div class="mb-16">
        <span class="text-xs uppercase tracking-[0.4em] text-luxury-gold font-medium mb-4 block">Hotel and Natural Resources</span>
        <h2 class="text-4xl md:text-5xl font-serif text-luxury-dark">Our Services</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        <!-- Tabs Left -->
        <div class="lg:col-span-4 space-y-4">
          <button 
            v-for="service in services" 
            :key="service.id"
            @click="activeService = service"
            class="w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-300 group flex items-center justify-between"
            :class="activeService.id === service.id ? 'bg-white shadow-xl translate-x-4 border-l-4 border-luxury-gold' : 'hover:bg-white/50'"
          >
            <div>
              <span class="block text-xs uppercase tracking-widest mb-2" :class="activeService.id === service.id ? 'text-luxury-gold' : 'text-luxury-light'">{{ service.title }}</span>
              <span class="text-xl font-serif" :class="activeService.id === service.id ? 'text-luxury-dark' : 'text-luxury-dark/60'">{{ service.name }}</span>
            </div>
            <div 
              class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              :class="activeService.id === service.id ? 'bg-luxury-gold text-white rotate-90' : 'bg-luxury-dark/5 text-luxury-dark'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </button>
        </div>

        <!-- Content Right -->
        <div class="lg:col-span-8">
          <div class="relative h-full">
            <Transition name="fade-slide" mode="out-in">
              <div :key="activeService.id" class="h-full flex flex-col">
                <div class="aspect-[16/9] md:aspect-auto md:flex-grow rounded-3xl overflow-hidden shadow-2xl mb-8">
                  <img :src="activeService.image" :alt="activeService.name" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-700" />
                </div>
                <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl -mt-16 md:-mt-24 md:ml-12 lg:ml-24 relative z-10">
                   <h3 class="text-3xl font-serif text-luxury-dark mb-4">{{ activeService.name }}</h3>
                   <p class="text-luxury-light leading-relaxed mb-6">{{ activeService.desc }}</p>
                   <button class="flex items-center space-x-3 text-luxury-gold text-xs font-bold uppercase tracking-widest group">
                      <span>Explore More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transform translate-x-0 group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                   </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease-out;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
