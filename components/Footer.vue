<template>
  <footer id="contact" class="bg-luxury-dark text-white pt-24 pb-12 scroll-mt-32">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
        <div class="lg:col-span-4 space-y-8">
          <h2 class="text-3xl font-serif tracking-[0.3em] uppercase">Solenne Bay</h2>
          <p class="text-white/50 leading-relaxed max-w-sm">
            Where luxury meets the rhythm of the waves. Solenne Bay offers an unparalleled sanctuary for those who seek the extraordinary in every moment.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>

        <div class="lg:col-span-2 space-y-6">
          <h4 class="text-xs uppercase tracking-widest font-bold text-luxury-gold">About Solenne Bay</h4>
          <ul class="space-y-4 text-white/60 text-sm">
            <li><NuxtLink to="/#home" class="hover:text-white transition-colors">Our Story</NuxtLink></li>
            <li><NuxtLink to="/#experience" class="hover:text-white transition-colors">The Experience</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Architecture</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Sustainability</NuxtLink></li>
          </ul>
        </div>

        <div class="lg:col-span-2 space-y-6">
          <h4 class="text-xs uppercase tracking-widest font-bold text-luxury-gold">Quick Links</h4>
          <ul class="space-y-4 text-white/60 text-sm">
            <li><NuxtLink to="/#booking" class="hover:text-white transition-colors">Book Now</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Gift Cards</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Terms of Service</NuxtLink></li>
          </ul>
        </div>

        <div class="lg:col-span-4 space-y-8">
          <h4 class="text-xs uppercase tracking-widest font-bold text-luxury-gold">Stay Informed</h4>
          <p class="text-white/50 text-sm">Subscribe to receive exclusive offers and news from Solenne Bay.</p>
          <form class="flex border-b border-white/20 pb-4">
            <input type="email" placeholder="Email Address" class="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-white/30" />
            <button class="text-luxury-gold uppercase text-[10px] tracking-widest font-bold ml-4 hover:translate-x-2 transition-transform">Join</button>
          </form>
          <div class="pt-4 space-y-2 text-sm text-white/60">
            <p>+1 (800) LUX-STAY</p>
            <p>hello@solennebay.com</p>
          </div>
        </div>
      </div>

      <div class="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] uppercase tracking-widest text-white/30">© 2024 Solenne Bay. All rights reserved.</p>
        <p class="text-[10px] uppercase tracking-widest text-white/30">Made with excellence by Winsfolio.com</p>
      </div>
    </div>
  </footer>
</template>
