<template>
  <section
    id="how"
    class="mx-auto max-w-7xl px-6 py-24 lg:px-10"
  >
    <div class="grid items-start gap-12 lg:grid-cols-12">
      <!-- Left copy -->
      <div class="lg:col-span-4">
        <div class="track-wide mb-6 font-mono text-sm text-dimmed uppercase">How it works</div>
        <h2 class="font-serif text-4xl leading-tight text-highlighted lg:text-5xl">Simple by<br /><em>design.</em></h2>
        <p class="mt-6 text-sm leading-relaxed text-toned">
          Most tools let plans multiply. XYZ enforces a single level of depth — because real goals don't need a map to
          find them.
        </p>
        <span class="mt-8 block h-0.5 w-8 bg-primary"></span>
      </div>

      <!-- Step cards -->
      <div class="grid gap-4 sm:grid-cols-2 md:gap-1 lg:col-span-8">
        <div
          v-for="step in steps"
          :key="step.number"
          class="rounded-sm border border-default/50 bg-muted px-9 py-8 backdrop-blur-xs duration-150 hover:border-default dark:bg-muted/30"
        >
          <div class="font-serif text-[3.5rem] leading-none text-primary tabular-nums">
            {{ step.number }}
          </div>
          <h3 class="mt-4 mb-2 font-medium text-highlighted">{{ step.title }}</h3>
          <p class="text-sm leading-relaxed text-toned">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Step {
    number: string;
    title: string;
    description: string;
  }

  const steps: Step[] = [
    {
      number: "01",
      title: "Create a Space",
      description:
        'A Space is a named collection — a goal domain like "Career" or "Q3 Launch". It gives every plan a home.',
    },
    {
      number: "02",
      title: "Add your plans",
      description:
        "Plans are flat, atomic actions inside a Space. No children. No hierarchy. Just the task and its status.",
    },
    {
      number: "03",
      title: "No rabbit holes",
      description:
        "Sub-plans are disabled by design. When a plan gets too big, it earns its own Space — keeping scope tight.",
    },
    {
      number: "04",
      title: "Track & complete",
      description:
        "Mark plans done, see your Space progress at a glance, and feel the momentum of finishing what you start.",
    },
  ];
</script>
