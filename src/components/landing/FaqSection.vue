<template>
  <section class="mx-auto max-w-7xl px-6 py-24 lg:px-10">
    <div class="mb-16">
      <div class="track-wide mb-4 font-mono text-sm text-dimmed uppercase">FAQ</div>
      <h2 class="max-w-xl font-serif text-4xl leading-tight text-highlighted lg:text-5xl">Quick answers.</h2>
    </div>

    <UAccordion
      :items="items"
      :ui="{
        item: 'mb-2 rounded-lg text-base border border-default/50 bg-muted/30 px-4',
        trigger: '',

        body: 'text-lg text-muted pt-2.5',
      }"
    />
  </section>
</template>

<script setup lang="ts">
  import type { AccordionItem } from "@nuxt/ui";

  import { ref } from "vue";

  const items = ref<AccordionItem[]>([
    {
      label: "When is Teams launching?",
      content:
        "We're targeting a launch later this year. Waitlist members will be notified first and get early access before the public launch.",
      open: false,
      trailingIcon: "solar:round-alt-arrow-down-bold",
    },
    {
      label: "Will there be a discount for early waitlist members?",
      content: "Yes. Everyone who joins the waitlist will get an exclusive early-bird discount when Teams launches.",
      open: false,
      trailingIcon: "solar:round-alt-arrow-down-bold",
    },
    {
      label: "Can I use useSpaces now while I wait?",
      content:
        "Absolutely. Sign up for free and start using Spaces and plans today. Your account will carry over when Teams launches.",
      open: false,
      trailingIcon: "solar:round-alt-arrow-down-bold",
    },
    {
      label: "What happens to my data if I don't upgrade to Teams?",
      content: "Nothing. Your Free or Pro account stays exactly as-is. Teams is an additive tier, not a replacement.",
      open: false,
      trailingIcon: "solar:round-alt-arrow-down-bold",
    },
  ]);
</script>
