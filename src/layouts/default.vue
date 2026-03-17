<script setup lang="ts">
  import AppFooter from "@/components/AppFooter.vue";
  import AppNavbar from "@/components/AppNavbar.vue";
</script>

<template>
  <div class="root">
    <app-navbar />
    <slot />
    <app-footer />
  </div>
</template>

<style scoped>
  .root {
    position: relative;
    min-height: 100dvh;
  }

  /* .root::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(13, 13, 13, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(13, 13, 13, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: 0;
  } */

  .root::after {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
  }
</style>
