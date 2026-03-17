<template>
  <nav class="fixed top-0 right-0 left-0 z-50 border-b border-accented/[0.07] bg-default/90 backdrop-blur-sm">
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="flex items-center gap-2"
      >
        <UIcon
          name="solar:crown-star-bold-duotone"
          class="size-6"
        />

        <span class="font-sans text-xl font-semibold tracking-tight text-highlighted">useSpaces</span>
      </RouterLink>

      <!-- Links + CTA -->
      <div class="flex items-center gap-6">
        <UButton
          v-for="link in navLinks"
          :key="link.href"
          :to="'/' + link.href"
          variant="link"
          color="neutral"
          size="sm"
          class="relative hidden text-base tracking-wide md:block"
        >
          {{ link.label }}
        </UButton>
        <UButton
          to="/waitlist"
          color="neutral"
          size="lg"
          class="rounded"
          >Join the waitlist</UButton
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
  const navLinks = [
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Features" },
    // { href: "#pricing", label: "Pricing" },
  ];
</script>
