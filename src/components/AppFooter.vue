<template>
  <footer class="bg-ink px-6 py-12 lg:px-10">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
        <!-- Brand blurb -->
        <div class="col-span-2 md:col-span-1">
          <div class="text-bone mb-3 font-mono text-sm font-medium tracking-tight">useSpaces</div>
          <p class="text-xs leading-relaxed text-dimmed">
            Turn chaotic plans into structured goals.<br />
            One Space at a time.
          </p>
        </div>

        <!-- Link columns -->
        <div
          v-for="col in columns"
          :key="col.heading"
        >
          <div class="mb-4 font-mono text-sm tracking-wide text-dimmed">
            {{ col.heading }}
          </div>
          <div class="space-y-2">
            <RouterLink
              v-for="link in col.links"
              :key="link.label"
              :to="link.href"
              class="block underline-offset-2 hover:underline"
            >
              {{ link.label }}
            </RouterLink>
          </div>
        </div>
        <div>
          <div class="mb-4 font-mono text-sm tracking-wide text-dimmed">Theme</div>
          <div class="col-span-2 space-y-2 md:col-span-1">
            <UColorModeSelect size="sm" />
          </div>
        </div>
      </div>

      <hr class="mb-6 border border-accented" />

      <div class="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div class="font-mono text-xs text-dimmed">
          © {{ new Date().getFullYear() }} useSpaces. All rights reserved.
        </div>
        <div class="font-mono text-xs text-dimmed">Built with clarity in mind.</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  interface FooterColumn {
    heading: string;
    links: { label: string; href: string }[];
  }

  const columns: FooterColumn[] = [
    {
      heading: "Navigation",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how" },
        // { label: "Pricing", href: "#pricing" },
        // { label: "Changelog", href: "#" },
        // { label: "Roadmap", href: "#" },
      ],
    },
    // {
    //   heading: "Company",
    //   links: [
    //     { label: "About", href: "#" },
    //     // { label: "Blog", href: "#" },
    //     { label: "Contact", href: "#" },
    //   ],
    // },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
  ];
</script>
