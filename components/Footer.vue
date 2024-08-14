<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

const links = [
  {
    label: t("projects"),
    to: "/projects",
  },
  {
    label: t("blog"),
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
<i18n lang="yaml">
en:
  projects: "Projects"
  blog: "Blog"
tr:
  projects: "Projeler"
  blog: "Blog"
ja:
  projects: "プロジェクト"
  blog: "ブログ"
</i18n>
