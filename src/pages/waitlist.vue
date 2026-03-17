<template>
  <DefaultLayout>
    <main class="mx-auto max-w-7xl px-6 lg:px-10">
      <!-- hero -->
      <section class="flex min-h-screen flex-col items-center justify-center pt-32 pb-24 text-center">
        <div class="flex max-w-2xl flex-col items-center">
          <h1 class="mb-6 font-serif text-5xl leading-[1.05] tracking-tight text-toned lg:text-6xl">
            Chaotic plans.<br />
            <em class="text-primary italic">Structured goals.</em>
          </h1>

          <p class="mb-4 max-w-md font-sans text-base leading-relaxed text-toned">
            Turn scattered ideas into structured goals. Organise plans into Spaces — flat, focused, free of endless
            nesting.
          </p>

          <p class="mb-12 max-w-md font-sans text-sm leading-relaxed text-dimmed">
            Join the waitlist. No spam — just one email when we open the doors.
          </p>

          <!-- form -->
          <div class="flex w-full max-w-md flex-col items-center">
            <UInput
              v-model="email"
              type="email"
              placeholder="your@email.com"
              variant="subtle"
              icon="solar:mailbox-bold"
              size="xl"
              class="w-full py-4"
              :class="error ? 'border-error' : ''"
              @keydown.enter="handleSubmit"
              :ui="{ trailing: 'pe-1', base: 'py-4 text-lg' }"
            >
              <template
                v-if="email?.length"
                #trailing
              >
                <UButton
                  color="neutral"
                  variant="link"
                  size="lg"
                  icon="i-lucide-circle-x"
                  aria-label="Clear input"
                  @click="email = ''"
                />
              </template>
            </UInput>
            <p
              v-if="error"
              class="text-left font-mono text-[10px] text-error"
            >
              {{ error }}
            </p>

            <UButton
              type="submit"
              color="neutral"
              size="xl"
              trailing-icon="solar:arrow-right-linear"
              class="text-lg tracking-wide"
              :disabled="submitted || loading"
              @click="handleSubmit"
              block
            >
              <span
                v-if="!submitted"
                class="flex items-center gap-2"
              >
                {{ loading ? "Joining..." : "Join waitlist" }}
              </span>
              <span
                v-else
                class="flex items-center gap-2"
              >
                You're on the list
              </span>
            </UButton>
          </div>

          <!-- social proof -->
          <div class="mt-6">
            <p class="font-mono text-[10px] tracking-wide text-dimmed uppercase">
              Join <span class="text-muted">{{ waitlistCount }}+ people</span> already waiting
            </p>
          </div>
        </div>
      </section>

      <!-- what's coming -->
      <FeaturesSection />
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
  import FeaturesSection from "@/components/landing/FeaturesSection.vue";
  import DefaultLayout from "@/layouts/default.vue";
  import { useHead } from "@unhead/vue";
  import { ref } from "vue";

  useHead({ title: "Join the waitlist — useSpaces" });

  const email = ref("");
  const error = ref("");
  const loading = ref(false);
  const submitted = ref(false);
  const waitlistCount = ref(20);

  async function handleSubmit() {
    error.value = "";

    if (!email.value.trim()) {
      error.value = "Please enter your email address";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      error.value = "Please enter a valid email address";
      return;
    }

    loading.value = true;

    // replace with your actual waitlist API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    loading.value = false;
    submitted.value = true;
    waitlistCount.value += 1;
  }
</script>
