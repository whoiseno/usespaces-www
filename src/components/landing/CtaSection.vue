<template>
  <section class="px-6 py-24 lg:px-10">
    <div class="mx-auto max-w-7xl">
      <div
        class="relative overflow-hidden p-12 lg:p-20"
        style="background: #0d0d0d"
      >
        <!-- Decorative grid overlay -->
        <div
          aria-hidden="true"
          style="
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
              linear-gradient(rgba(245, 242, 236, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 242, 236, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
          "
        ></div>

        <div class="relative z-10 grid items-center gap-10 lg:grid-cols-2">
          <!-- Heading -->
          <div>
            <div class="track-wide mb-6 font-mono text-sm text-muted uppercase">Ready to start</div>
            <h2 class="font-serif text-4xl leading-tight text-highlighted not-dark:text-inverted lg:text-6xl">
              Your plans.<br /><em>Finally structured.</em>
            </h2>
          </div>

          <!-- Body + CTAs -->
          <div class="flex flex-col gap-4 lg:items-end">
            <p class="max-w-[320px] text-sm leading-relaxed text-muted">
              No onboarding quiz. No 14-step wizard. Create a Space in under 30 seconds and get to work.
            </p>
            <div class="grid gap-3 md:w-[320px] md:grid-cols-2">
              <UButton
                to="/waitlist"
                color="neutral"
                size="lg"
                block
              >
                Join the waitlist
              </UButton>
              <UButton
                to="#how"
                variant="outline"
                color="neutral"
                size="xl"
                trailing-icon="solar:arrow-right-outline"
                class="text-sm"
              >
                How it works
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
