<script setup lang="ts">
//@ts-nocheck
import { toRaw } from "vue";

const { isMobileOrTablet } = useDevice();

const githubRepos = await useFetch(
  "https://api.github.com/users/falsisdev/repos"
);

const repos = toRaw(githubRepos.data.value);
</script>
<template>
  <div class="bg-gray-900 my-10">
    <div v-if="!isMobileOrTablet" class="flex flex-row">
      <div class="mx-auto grid max-w-7xl grid-cols-7">
        <div class="col-span-2 col-start-1 col-end-5 row-start-1">
          <div class="pr-4">
            <div class="max-w-lg">
              <p class="text-gray-500 font-semibold leading-7">Hi👋🏻,</p>
              <h1 class="mt-2 text-5xl font-bold text-white">
                I'm <span class="text-blue-400">Falsis</span>
              </h1>
              <p class="mt-6 text-xl leading-8 text-gray-400">
                I'm just an alone developer who tries to develop some web apps.
              </p>
            </div>
            <p
              id="spotifycheck"
              class="mt-6 text-xl leading-8 text-gray-400 hidden"
            >
              <span
                id="spotify"
                class="inline-flex items-center rounded-md bg-green-50 px-4 py-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
              >
                <img id="albumart" src="" class="h-14 w-14 mr-2"
              /></span>
            </p>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 sticky top-4 col-start-6 col-span-2 col-end-8 row-span-2 row-start-1 overflow-hidden"
        >
          <img
            class="hover:animate-pulse w-48 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
            id="avatar"
            src=""
            alt="Yükleniyor..."
          />
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col">
      <img
        class="hover:animate-pulse w-64 place-self-center rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 mb-5"
        id="avatar"
        src=""
        alt="Yükleniyor..."
      />
      <div>
        <p class="text-gray-500 font-semibold leading-7">Hi 👋🏻,</p>
        <h1 class="text-5xl font-bold text-white">
          I'm <span class="text-blue-400">Falsis</span>
        </h1>
        <p class="mt-2 text-xl leading-8 text-gray-400">
          I'm just an alone developer who tries to develop some web apps.
        </p>
      </div>
      <p
        id="spotifycheck"
        class="mt-6 text-xl leading-8 text-gray-400 hidden"
      ></p>
    </div>
    <article
      v-if="!isMobileOrTablet"
      id="repos"
      class="prose mt-4 mx-auto max-w-7xl"
    >
      <h1 class="text-white">Github Repositories</h1>
      <div class="grid gap-4 grid-cols-3">
        <UCard
          v-for="repo of repos"
          :key="repo"
          class="w-full my-1 dark:shadow-lg border border-gray-900"
        >
          <template #header>
            <div class="flex flex-row">
              <span class="mb-1">
                <span class="text-gray-500">falsisdev/</span>
                <span class="text-white">{{ repo.name }}</span>
              </span>
              <span class="grow" />
              <span class="text-white flex flex-row">
                <span class="mt-1">
                  <UIcon
                    name="i-material-symbols-star"
                    class="h-5 w-5 text-yellow-400 mx-1"
                  />
                </span>
                {{ repo.stargazers_count }}
              </span>
            </div>
          </template>
          <span class="text-gray-300">
            {{
              repo.description.length >= 30
                ? repo.description.substring(0, 30) + "..."
                : repo.description
            }}
          </span>
          <template #footer>
            <div class="flex flex-row">
              <span class="text-white flex flex-row">
                <span class="mt-1">
                  <UIcon
                    :name="`i-${
                      repo.language == 'CSS'
                        ? 'mdi-language-css3'
                        : repo.language == 'Vue'
                        ? 'logos-vue'
                        : repo.language == 'Svelte'
                        ? 'logos-svelte-icon'
                        : repo.language == null
                        ? 'ph-markdown-logo-fill'
                        : ''
                    }`"
                    class="h-5 w-5 text-white"
                  />
                </span>
              </span>
              <span class="grow" />
              <span class="text-white flex flex-row">
                <NuxtLink :to="repo.html_url" class="mt-1">
                  <UIcon name="i-mdi-github" class="h-5 w-5 text-white" />
                </NuxtLink>
              </span>
            </div>
          </template>
        </UCard>
      </div>
    </article>
    <article v-else id="repos" class="prose mt-5 mx-auto max-w-7xl">
      <h1 class="text-white">Github Repositories</h1>
      <div class="flex flex-col">
        <UCard
          v-for="repo of repos"
          :key="repo"
          class="w-full my-1 dark:shadow-lg border border-gray-900"
        >
          <template #header>
            <div class="flex flex-row">
              <span class="mb-1">
                <span class="text-gray-500">falsisdev/</span>
                <span class="text-white">{{ repo.name }}</span>
              </span>
              <span class="grow" />
              <span class="text-white flex flex-row">
                <span class="mt-1">
                  <UIcon
                    name="i-material-symbols-star"
                    class="h-5 w-5 text-yellow-400 mx-1"
                  />
                </span>
                {{ repo.stargazers_count }}
              </span>
            </div>
          </template>
          <span class="text-gray-300">
            {{
              repo.description.length >= 30
                ? repo.description.substring(0, 30) + "..."
                : repo.description
            }}
          </span>
          <template #footer>
            <div class="flex flex-row">
              <span class="text-white flex flex-row">
                <span class="mt-1">
                  <UIcon
                    :name="`i-${
                      repo.language == 'CSS'
                        ? 'mdi-language-css3'
                        : repo.language == 'Vue'
                        ? 'logos-vue'
                        : repo.language == 'Svelte'
                        ? 'logos-svelte-icon'
                        : repo.language == null
                        ? 'ph-markdown-logo-fill'
                        : ''
                    }`"
                    class="h-5 w-5 text-white"
                  />
                </span>
              </span>
              <span class="grow" />
              <span class="text-white flex flex-row">
                <NuxtLink :to="repo.html_url" class="mt-1">
                  <UIcon name="i-mdi-github" class="h-5 w-5 text-white" />
                </NuxtLink>
              </span>
            </div>
          </template>
        </UCard>
      </div>
    </article>
  </div>
</template>
