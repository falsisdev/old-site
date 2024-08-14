<script setup lang="ts">
//@ts-nocheck
const { isMobileOrTablet } = useDevice();
const route = useRoute();
const { t } = useI18n({
  useScope: "local",
});

const links = [
  [
    {
      label: isMobileOrTablet ? "" : t("home"),
      icon: "i-material-symbols-home",
      to: "/",
      class: "after:bg-blue-500 dark:after:bg-blue-400",
    },
    {
      label: isMobileOrTablet ? "" : t("projects"),
      icon: "material-symbols-deployed-code",
      to: `/projects`,
      class: "after:bg-blue-500 dark:after:bg-blue-400",
    },
    {
      label: isMobileOrTablet ? "" : t("blog"),
      icon: "material-symbols-article",
      to: "/blog",
      class: "after:bg-blue-500 dark:after:bg-blue-400",
    },
  ],
  [
    {
      label: isMobileOrTablet ? "" : t("me"),
      to: "/me",
      avatar: {
        src: "https://cdn.discordapp.com/attachments/775822548519616562/1272954903362404354/0d4cc9343433b6d6313f0ef6a10119ba.jpg?ex=66bcdb23&is=66bb89a3&hm=ed8e9e0f12ac6bf227af2a21bc748b8197cdecd2501e1458db2678a9c6217775&",
      },
      badge: {
        id: "status",
        color: "blue",
        variant: "subtle",
        label: "",
        class: "ring-0",
      },
    },
    {
      icon: "mdi-github",
      to: "https://github.com/falsisdev",
    },
  ],
];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-gray-200 dark:border-gray-800"
  />
</template>

<i18n lang="yaml">
en:
  me: "me"
  home: "Home"
  projects: "Projects"
  blog: "Blog"
  idle: "idle"
  dnd: "dnd"
  online: "online"
  offline: "offline"
tr:
  me: "ben"
  home: "Ana Sayfa"
  projects: "Projeler"
  blog: "Blog"
  idle: "boşta"
  dnd: "meşgul"
  online: "çevrimiçi"
  offline: "çevrimdışı"
ja:
  me: "私"
  home: "ホーム"
  projects: "プロジェクト"
  blog: "ブログ"
  idle: "アイドル"
  dnd: "拒否"
  online: "オンライン"
  offline: "オフライン"
</i18n>
