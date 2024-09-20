<script setup lang="ts">
//@ts-nocheck
const { isMobileOrTablet } = useDevice();
const route = useRoute();

const links = [
  [
    {
      label: isMobileOrTablet ? "" : "Home",
      icon: "i-material-symbols-home",
      to: "/",
      class: "after:bg-blue-500 dark:after:bg-blue-400",
    },
    {
      label: isMobileOrTablet ? "" : "Projects",
      icon: "material-symbols-deployed-code",
      to: `/projects`,
      class: "after:bg-blue-500 dark:after:bg-blue-400",
    },
    {
      label: isMobileOrTablet ? "" : "Blog",
      icon: "material-symbols-article",
      to: "/blog",
      class: "after:bg-blue-500 dark:after:bg-blue-400",
    },
  ],
  [
    {
      label: isMobileOrTablet ? "" : "me",
      to: "/me",
      avatar: {
        src: "https://4.downloader.disk.yandex.com.tr/preview/2071693422822b5d8bbc8acedd5881138dd2184861ff745119aa0c9cf213fe86/inf/Uc_w_QW5QBOdwlN08m5wjixh1YWa10xfI_BZp4si9j-0BhfoIrcuXB61-Aoy0UpUOHMif62gtjt6UiAOFf1JYw%3D%3D?uid=1129069430&filename=11386f832e2ce273acb7baa26cc7fcbe.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1129069430&tknv=v2&size=1708x794",
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
