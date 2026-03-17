<template>
  <section class="relative overflow-hidden px-6 py-24 lg:px-10">
    <div class="mx-auto max-w-7xl">
      <div class="grid items-center gap-8 lg:grid-cols-12">
        <!-- Quote -->
        <div class="lg:col-span-7">
          <div class="track-wide mb-6 font-mono text-sm text-muted uppercase">Our philosophy</div>
          <blockquote class="font-serif text-3xl leading-tight text-highlighted lg:text-5xl">
            &ldquo;Planning fails when plans breed plans. useSpaces breaks the cycle — one level, total clarity.&rdquo;
          </blockquote>
          <span class="mt-8 block h-0.5 w-8 bg-primary"></span>
        </div>

        <!-- Demo comparison -->
        <div class="lg:col-span-5">
          <div class="rounded-sm border border-default bg-muted/40 p-6">
            <!-- Typical app -->
            <div class="track-wide mb-4 font-mono text-sm text-muted">Typical todo app</div>
            <div class="mb-8 space-y-1 font-mono text-xs">
              <div
                v-for="(row, i) in chaosRows"
                :key="i"
                :style="{ paddingLeft: `${row.indent * 4}px` }"
                :class="[
                  row.danger ? 'text-error' : 'text-toned',
                  row.strikethrough ? 'line-through' : '',
                  row.pulse ? 'animate-pulse' : '',
                ]"
              >
                {{ row.text }}
              </div>
            </div>

            <!-- XYZ -->
            <div class="track-wide mb-4 font-mono text-sm text-muted">useSpaces</div>
            <div class="space-y-1 font-mono text-xs">
              <div
                v-for="(row, i) in clarityRows"
                :key="i"
                :class="[
                  row.accent ? 'text-highlighted' : '',
                  row.muted ? 'text-dimmed' : '',
                  !row.accent && !row.muted ? 'pl-4 text-muted' : '',
                ]"
              >
                {{ row.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface DemoRow {
    indent: number;
    text: string;
    strikethrough?: boolean;
    danger?: boolean;
    pulse?: boolean;
  }

  const chaosRows: DemoRow[] = [
    { indent: 0, text: "└ Q2 Goals" },
    { indent: 4, text: "└ Ship product" },
    { indent: 8, text: "└ Design mockups", strikethrough: true, danger: true },
    { indent: 12, text: "└ Research trends", danger: true },
    { indent: 16, text: "└ Find inspiration", danger: true },
    { indent: 20, text: "└ Pinterest boards…", danger: true, pulse: true },
  ];

  const clarityRows = [
    { text: "▸ Q2 Goals — (space)", accent: true },
    { text: "· Ship product" },
    { text: "· Design mockups" },
    { text: "· Research trends" },
    { text: "— that's it.", muted: true },
  ];
</script>
