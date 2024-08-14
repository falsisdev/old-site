<template>
  <div>
    <h1>{{ content.title }}</h1>
    <div v-html="content.body"></div>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { useContent } from "@nuxt/content";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  async asyncData() {
    const route = useRoute();
    const { locale } = useI18n();
    const slug = route.params.slug || "index";

    const { data: content } = await useContent(
      `${locale.value}/${slug}`
    ).fetch();

    return { content };
  },
});
</script>
