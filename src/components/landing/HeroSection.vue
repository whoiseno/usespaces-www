<template>
  <section class="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10">
    <!-- Headline grid -->
    <div class="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-8">
        <!-- <div class="mb-8 font-mono text-sm tracking-wide text-muted uppercase">
          <span class="inline-flex items-center gap-3">
            <span class="inline-block h-px w-6 bg-inverted dark:bg-accented"></span>
            Structured goal planning
          </span>
        </div> -->
        <h1 class="font-serif text-[clamp(3rem,8vw,5rem)] leading-[0.94] tracking-tight text-highlighted">
          Chaos in.<br />
          <em>Clarity</em> out.
        </h1>
        <p class="mt-8 max-w-xl text-lg leading-relaxed text-toned lg:mt-10 lg:text-2xl">
          useSpaces turns scattered ideas into structured goals. Organise plans into Spaces — flat, focused, free of
          endless nesting.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <UButton
            to="/waitlist"
            color="neutral"
            class="rounded"
            size="lg"
          >
            Join the waitlist
          </UButton>
          <UButton
            to="/#how"
            variant="outline"
            color="neutral"
            class="rounded"
            size="lg"
          >
            See how it works
          </UButton>
        </div>
      </div>

      <!-- <div class="lg:col-span-4 lg:pb-3">
        <p class="mb-8 text-base leading-relaxed text-toned">
          useSpaces turns scattered ideas into structured goals. Organise plans into Spaces — flat, focused, free of
          endless nesting.
        </p>
        <div class="flex flex-wrap gap-3">
          <UButton
            to="/today"
            variant="soft"
            color="neutral"
            class="rounded"
            trailing-icon="solar:arrow-right-linear"
            size="lg"
          >
            Start for free
          </UButton>
          <UButton
            to="#"
            variant="outline"
            color="neutral"
            class="rounded"
            size="lg"
          >
            See how it works
          </UButton>
        </div>
      </div> -->
    </div>

    <!-- App Mockup -->
    <!-- <div class="mt-16">
      <div
        class="w-full border border-accented/12 bg-elevated p-1.5"
        style="
          box-shadow:
            0 32px 80px rgba(13, 13, 13, 0.12),
            0 4px 16px rgba(13, 13, 13, 0.06);
        ">
        <p>Insert an image here</p>
      </div>
    </div> -->
  </section>
</template>
