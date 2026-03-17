<template>
  <UApp>
    <RouterView />
  </UApp>
</template>

<script lang="ts" setup>
  import { useHead } from "@unhead/vue";

  useHead({
    title: "Home",
    titleTemplate: "%s | useSpaces",
  });
</script>
