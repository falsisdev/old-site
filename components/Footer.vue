<script setup lang="ts">
const links = [
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "GitHub",
    to: "https://github.com/falsisdev",
  },
];
</script>

<template>
  <UFooter :links="links">
    <template #left>
      This website is
      <NuxtLink to="https://github.com/falsisdev/website"
        >open-source.</NuxtLink
      >
    </template>
    <template #right> Made in 2024 </template>
  </UFooter>
</template>
