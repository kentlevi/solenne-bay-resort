<template>
  <div id="booking" class="relative z-20 -mt-16 max-w-[1200px] mx-auto px-6 scroll-mt-32">
    <div class="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-luxury-bg">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
        
        <!-- Check In -->
        <div class="space-y-2">
          <label class="text-[10px] uppercase font-bold tracking-widest text-luxury-light">Check In</label>
          <div class="relative">
            <input type="date" class="w-full bg-luxury-bg border-none px-4 py-3 rounded-lg text-sm focus:ring-1 focus:ring-luxury-gold outline-none" placeholder="Add Date">
          </div>
        </div>

        <!-- Check Out -->
        <div class="space-y-2">
          <label class="text-[10px] uppercase font-bold tracking-widest text-luxury-light">Check Out</label>
          <div class="relative">
            <input type="date" class="w-full bg-luxury-bg border-none px-4 py-3 rounded-lg text-sm focus:ring-1 focus:ring-luxury-gold outline-none" placeholder="Add Date">
          </div>
        </div>

        <!-- Adults -->
        <div class="space-y-2">
          <label class="text-[10px] uppercase font-bold tracking-widest text-luxury-light">Adults</label>
          <select class="w-full bg-luxury-bg border-none px-4 py-3 rounded-lg text-sm focus:ring-1 focus:ring-luxury-gold outline-none appearance-none">
            <option>1 Adult</option>
            <option selected>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
          </select>
        </div>

        <!-- Children -->
        <div class="space-y-2">
          <label class="text-[10px] uppercase font-bold tracking-widest text-luxury-light">Children</label>
          <select class="w-full bg-luxury-bg border-none px-4 py-3 rounded-lg text-sm focus:ring-1 focus:ring-luxury-gold outline-none appearance-none">
            <option selected>0 Children</option>
            <option>1 Child</option>
            <option>2 Children</option>
          </select>
        </div>

        <!-- Booking Button -->
        <button class="w-full bg-luxury-gold hover:bg-luxury-dark text-luxury-dark hover:text-white px-8 py-3.5 rounded-lg transition-all duration-300 uppercase text-xs font-bold tracking-widest shadow-lg">
          Search Rooms
        </button>

      </div>
    </div>
  </div>
</template>
