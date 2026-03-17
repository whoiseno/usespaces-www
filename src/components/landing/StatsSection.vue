<template>
  <section class="mx-auto max-w-7xl px-6 py-16 lg:px-10">
    <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
      <div
        v-for="stat in stats"
        :key="stat.id"
      >
        <div class="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none text-highlighted">{{ stat.value }}</div>
        <div class="track-wide text- mt-2 font-mono text-sm">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Stat {
    id: number;
    value: string;
    label: string;
  }

  const stats: Stat[] = [
    { id: 1, value: "∞", label: "Plans per space" },
    { id: 2, value: "0", label: "Sub-plan nesting" },
    { id: 3, value: "1", label: "Layer of focus" },
    { id: 4, value: "Free", label: "To get started" },
  ];
</script>
