<template>
  <section
    id="pricing"
    class="mx-auto max-w-7xl px-6 py-24 lg:px-10"
  >
    <div class="mb-16">
      <div class="track-wide mb-4 font-mono text-sm text-muted uppercase">Pricing</div>
      <h2 class="font-serif text-4xl leading-tight text-highlighted lg:text-5xl">
        Uncomplicated,<br /><em>like the app.</em>
      </h2>
    </div>

    <!-- billing toggle -->
    <div class="mb-12 flex items-center gap-4">
      <div class="flex items-center rounded-full border border-default/50 bg-muted/30 p-1">
        <button
          class="rounded-full px-5 py-1.5 font-mono text-sm transition-all duration-200"
          :class="
            billingCycle === 'monthly' ? 'bg-default text-highlighted shadow-sm' : 'text-muted hover:text-default'
          "
          @click="billingCycle = 'monthly'"
        >
          Monthly
        </button>
        <button
          class="flex items-center gap-2 rounded-full px-5 py-1.5 font-mono text-sm transition-all duration-200"
          :class="billingCycle === 'annual' ? 'bg-default text-highlighted shadow-sm' : 'text-muted hover:text-default'"
          @click="billingCycle = 'annual'"
        >
          Annual
          <span
            class="rounded-full bg-yellow-500/20 px-2 py-0.5 font-mono text-xs text-yellow-600 dark:text-yellow-400"
          >
            Save up to 25%
          </span>
        </button>
      </div>
    </div>

    <div class="grid max-w-full gap-4 md:grid-cols-3">
      <div
        v-for="tier in tiers"
        :key="tier.name"
        class="relative overflow-hidden rounded-xl border p-8 transition-all duration-300"
        :class="[
          tier.dark
            ? 'z-10 -translate-y-2 scale-[1.02] border-blue-400/40 bg-blue-600 text-white shadow-2xl shadow-blue-500/40'
            : 'translate-y-1 scale-[0.98] border-default/40 bg-muted text-default shadow-inner dark:bg-muted/30',
        ]"
      >
        <!-- noise texture overlay -->
        <div
          class="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          :style="{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/><feColorMatrix type=%22saturate%22 values=%220%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%221%22/></svg>')`,
            backgroundSize: '200px 200px',
          }"
        />

        <!-- blue card inner glow -->
        <div
          v-if="tier.dark"
          class="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-blue-400/20 via-transparent to-blue-900/30"
        />

        <!-- badge -->
        <div
          v-if="tier.badge"
          class="mb-4 inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
        >
          <span class="mr-1.5 size-1.5 rounded-full bg-white" />
          {{ tier.badge }}
        </div>
        <div
          v-else
          class="mb-4 h-6"
        />

        <!-- name -->
        <div
          class="mb-4 flex items-center gap-1.5 font-mono text-sm font-semibold tracking-widest uppercase"
          :class="tier.dark ? 'text-blue-100' : 'text-muted'"
        >
          <span class="inline-block h-0.5 w-8 bg-primary"></span>{{ tier.name }}
        </div>

        <!-- price -->
        <div class="mb-1 flex items-end gap-1">
          <Transition
            name="price"
            mode="out-in"
          >
            <div
              :key="billingCycle + tier.name"
              class="font-serif text-5xl tabular-nums"
              :class="tier.dark ? 'text-white' : 'text-default'"
            >
              {{ displayPrice(tier) }}
            </div>
          </Transition>
        </div>
        <div
          class="mb-2 font-mono text-xs"
          :class="tier.dark ? 'text-blue-200' : 'text-muted'"
        >
          {{ displayPeriod(tier) }}
        </div>

        <!-- annual savings callout -->
        <div class="mb-4 h-5">
          <Transition
            name="fade"
            mode="out-in"
          >
            <p
              v-if="billingCycle === 'annual' && tier.annualPrice !== '$0'"
              class="font-mono text-xs"
              :class="tier.dark ? 'text-blue-200' : 'text-muted'"
            >
              {{ tier.annualPrice }} billed annually
            </p>
          </Transition>
        </div>

        <!-- description -->
        <p
          class="mb-8 text-sm leading-relaxed"
          :class="tier.dark ? 'text-blue-100' : 'text-muted'"
        >
          {{ tier.description }}
        </p>

        <!-- CTA -->
        <UButton
          :variant="tier.dark ? 'solid' : 'subtle'"
          color="neutral"
          :class="[tier.dark ? 'bg-white! font-semibold text-blue-600! hover:bg-blue-50!' : '']"
          :disabled="tier.cta.disbaled"
          @click.prevent="tier.cta.onClick"
          block
        >
          {{ tier.cta.label }}
        </UButton>

        <!-- features -->
        <ul class="mt-8 space-y-3 text-sm">
          <li
            v-for="feat in tier.features"
            :key="feat"
            class="flex items-center gap-3"
          >
            <UIcon
              name="ph:circle-wavy-check-fill"
              class="size-4 shrink-0"
              :class="tier.dark ? 'text-blue-200' : 'text-muted'"
            />
            <span :class="tier.dark ? 'text-blue-50' : 'text-default'">
              {{ feat }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  interface PricingTier {
    name: string;
    monthlyPrice: string;
    annualPrice: string;
    annualMonthlyPrice: string;
    period: string;
    annualPeriod: string;
    description: string;
    features: string[];
    cta: {
      label: string;
      onClick?:
        | ((event: MouseEvent) => void | Promise<void>)
        | ((event: MouseEvent) => void | Promise<void>)[]
        | undefined;
      disbaled?: boolean;
    };
    dark?: boolean;
    badge?: string;
  }

  const billingCycle = ref<"monthly" | "annual">("monthly");

  const tiers: PricingTier[] = [
    {
      name: "Free",
      monthlyPrice: "$0",
      annualPrice: "$0",
      annualMonthlyPrice: "$0",
      period: "/ month",
      annualPeriod: "/ year",
      description: "Perfect for getting started and trying out useSpaces.",
      features: ["Up to 3 spaces", "Up to 10 plans per space", "Priority levels", "Plan completion tracking"],
      cta: {
        label: "Get started — Free",
        onClick: () => {
          console.log("Free plan has been fired");
        },
      },
    },
    {
      name: "Pro",
      monthlyPrice: "$8",
      annualPrice: "$72",
      annualMonthlyPrice: "$6",
      period: "/ month",
      annualPeriod: "/ year",
      description: "For individuals who need more room to think and plan.",
      features: [
        "Unlimited spaces",
        "Unlimited plans per space",
        "Priority levels",
        "Plan completion tracking",
        "5+ Intergrations",
        "Email + Chat support",
      ],
      cta: {
        label: "Buy now",
        onClick: () => {
          console.log("Pro plan has been fired");
        },
      },
      dark: true,
      badge: "Most popular",
    },
    {
      name: "Teams",
      monthlyPrice: "$12",
      annualPrice: "$120",
      annualMonthlyPrice: "$10",
      period: "/ user / month",
      annualPeriod: "/ user / year",
      description: "For teams who want to organize and collaborate together.",
      features: [
        "Everything in Pro",
        "Shared spaces",
        "Collaborative plans",
        "Admin controls",
        "Team activity feed",
        "Priority support",
      ],
      cta: {
        label: "Coming soon",
        disbaled: true,
        onClick: () => {
          console.log("Teams plan has been fired");
        },
      },
    },
  ];

  const displayPrice = (tier: PricingTier) =>
    billingCycle.value === "annual" ? tier.annualMonthlyPrice : tier.monthlyPrice;

  const displayPeriod = (tier: PricingTier) =>
    billingCycle.value === "annual" ? "/ month, billed annually" : tier.period;
</script>

<style scoped>
  .price-enter-active,
  .price-leave-active {
    transition: all 0.2s ease;
  }
  .price-enter-from {
    opacity: 0;
    transform: translateY(-6px);
  }
  .price-leave-to {
    opacity: 0;
    transform: translateY(6px);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
