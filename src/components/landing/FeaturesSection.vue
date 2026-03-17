<template>
  <section
    :id="id"
    class="mx-auto max-w-7xl px-6 py-24 lg:px-10"
  >
    <div class="mb-16">
      <div class="track-wide mb-4 font-mono text-sm text-dimmed uppercase">Built for individuals</div>
      <h2 class="max-w-xl font-serif text-4xl leading-tight text-highlighted lg:text-5xl">
        Every feature earns its place.
      </h2>
    </div>

    <div class="grid gap-4 md:grid-cols-3 md:gap-1">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="rounded-sm border border-default/50 bg-muted p-8 backdrop-blur-xs duration-150 hover:border-default dark:bg-muted/30"
      >
        <UIcon
          :name="feature.iconPath"
          class="mb-5 size-6 text-primary"
        />
        <h3 class="mb-2 font-medium text-highlighted">{{ feature.title }}</h3>
        <p class="text-sm leading-relaxed text-muted">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    id?: string;
  }>();

  interface Feature {
    title: string;
    description: string;
    iconPath: string;
  }

  const features: Feature[] = [
    {
      title: "Spaces",
      description: "Collections that group related plans. Clean, named, purpose-driven. One Space per goal domain.",
      iconPath: "solar:folder-bold",
    },
    {
      title: "Flat plans",
      description:
        "Plans live at one level only. When complexity creeps in, the system redirects you — not enables you to spiral.",
      iconPath: "solar:alarm-bold",
    },
    {
      title: "Progress tracking",
      description: "See Space completion at a glance. No dashboards with seventeen widgets — just the percentage done.",
      iconPath: "solar:check-circle-bold",
    },
    {
      title: "Multiple Spaces",
      description: "Keep your career goals separate from your health goals. Each Space is a focused world of its own.",
      iconPath: "solar:layers-minimalistic-bold",
    },
    {
      title: "No decision fatigue",
      description: "The app makes the structural decision for you. No templates to pick, no schema to configure.",
      iconPath: "solar:bolt-bold",
    },
    {
      title: "Clean interface",
      description:
        "Nothing to toggle, no settings to tune. Open the app, know exactly where you are and what to do next.",
      iconPath: "solar:align-left-bold",
    },
  ];
</script>
