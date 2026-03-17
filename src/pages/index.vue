<template>
  <DefaultLayout>
    <main>
      <!-- Hero section -->
      <HeroSection />

      <!-- How it works section -->
      <HowItWorksSection />

      <!-- Features section -->
      <!-- <hr class="mx-auto max-w-7xl border border-default px-6 lg:px-10" /> -->
      <FeaturesSection id="features" />

      <!-- Philosophy section -->
      <PhilosophySection />

      <!-- Pricing section -->
      <!-- <PricingSection /> -->

      <!-- CTA section -->
      <CtaSection />
    </main>
  </DefaultLayout>
</template>

<script lang="ts" setup>
  import CtaSection from "@/components/landing/CtaSection.vue";
  import FeaturesSection from "@/components/landing/FeaturesSection.vue";
  import HeroSection from "@/components/landing/HeroSection.vue";
  import HowItWorksSection from "@/components/landing/HowItWorksSection.vue";
  import PhilosophySection from "@/components/landing/PhilosophySection.vue";
  // import PricingSection from "@/components/landing/PricingSection.vue";
  import DefaultLayout from "@/layouts/default.vue";
</script>
