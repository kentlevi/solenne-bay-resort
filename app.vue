<template>
  <div class="antialiased">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

/* Global page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
