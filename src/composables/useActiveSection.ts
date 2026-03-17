import { onBeforeUnmount, onMounted, ref } from "vue";

export function useActiveSection(sectionIds: string[], offset = 100) {
  const activeSection = ref<string>("");

  const onScroll = () => {
    let current = "";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - offset) {
        current = id;
      }
    }
    activeSection.value = current;
  };

  onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
  onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));

  return { activeSection };
}
