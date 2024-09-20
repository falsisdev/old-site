<script setup lang="ts">
//@ts-nocheck
import { toRaw } from "vue";

const { isMobileOrTablet } = useDevice();
</script>
<template>
  <div class="bg-gray-900 my-10">
    <div v-if="!isMobileOrTablet" class="flex flex-row">
      <div class="mx-auto grid max-w-7xl grid-cols-7">
        <div class="col-span-2 col-start-1 col-end-5 row-start-1">
          <div class="pr-4">
            <div class="max-w-lg">
              <p class="text-gray-500 font-semibold leading-7">Let's talk</p>
              <h1 class="mt-2 text-5xl font-bold text-white">
                About <span class="text-blue-400">Me</span>
              </h1>
              <p class="mt-6 text-xl leading-8 text-gray-400">
                Hi, I'm Falsis. But that's not my name for sure. My name is
                Kerem. Nice to meet you. Currently, I'm
                <span class="text-blue-400">{{
                  (
                    (Date.now() - 1199002814000) /
                    1000 /
                    60 /
                    60 /
                    24 /
                    365.25
                  ).toFixed(2)
                }}</span>
                years old. So this means now I'm
                {{
                  Date.now() <= 1749900506000
                    ? "an 11th grade high-school student"
                    : Date.now() <= 1781436506000
                    ? "a 12th grade high school student"
                    : "a university student"
                }}.
              </p>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 top-4 col-start-6 col-span-2 col-end-8 row-span-2 row-start-1 overflow-hidden"
        >
          <img
            class="hover:animate-pulse w-48 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
            id="avatar"
            src=""
            alt="Yükleniyor..."
          />
        </div>
        <div class="col-start-1 col-end-8 row-start-2">
          <div class="pr-4">
            <p class="mt-6 text-xl leading-8 text-gray-400">
              I guess I should start with programming first. I am a Front-End
              developer who develops full-stack projects because sometimes uses
              back-end, but is far from being a full-stack developer due to
              shortcomings in back-end. I am developing web
              <NuxtLink to="/projects" class="text-blue-400">projects</NuxtLink>
              but I want to focus on Android application development in the
              future. That's why learning Kotlin is one of my goals but I am
              postponing it for later because I will have difficulty using
              Android Studio on my current computer. In short, I am currently a
              Front-End Web Developer. You can see the technologies i use
              <NuxtLink to="#techstack" class="text-blue-400">here</NuxtLink>.
              <br />
              <br />
              Academically I'm interested in Maths, Physics, History, Geography
              and Linguistics. Other than that, I love playing Football,
              Basketbool, Billiard, Guitar and something else.
              <br />
              I really love listening music. I love music genres such as Rock,
              Hard Rock, Turkish Rock, Metal, Alternative Metal, Numetal etc.
              <br />
              I use Instagram, YouTube, WhatsApp, Discord,
              <NuxtLink
                class="text-blue-400"
                to="https://open.spotify.com/user/315l5ib3a4fd2obidm76lipspxji?si=a4b244df74e44569"
                >Spotify</NuxtLink
              >, Pinterest, Reddit, Netflix,
              <NuxtLink class="text-blue-400" to="https://github.com/falsisdev"
                >GitHub</NuxtLink
              >, Wikipedia and Tiktok as social media platforms.
              <br />
              My main language is Turkish, my English level is about B2, I
              started learning German but it's still A1 or A2 for me. I can
              understand and speak A1 level Japanese too, besides I can read
              Kana (Hiragana & Katakana). Because of the language family of my
              main language. I can understand over 90% Oghuz languages such as
              Gagauz, Azerbaijani or Turkmen. I'm a Turkish muslim. So I'm
              familiar with Arabic alphabet too but I can't read it fr.
              <br />
              When it comes to talk about the series and movies, I like things
              that surprise me when I watch them, like Plot Twists. In this
              sense, I can watch any series or anime set in any period. I even
              watch sitcoms, even though they interest me less than others. I
              watched a lot of anime. You can check it out on
              <NuxtLink
                class="text-blue-400"
                to="https://myanimelist.net/profile/falsis"
                >MyAnimeList</NuxtLink
              >
              or
              <NuxtLink
                class="text-blue-400"
                to="https://anilist.co/user/Falsis/"
                >AniList</NuxtLink
              >. I also enjoy reading manga and occasionally light nove. You can
              check them out on those accounts too.
              <br />
              Regarding sports, I like to play and watch football. I am a
              Fenerbahçe fan. I don't support a team in the city I live in. I
              don't support any team in Europe other than Real Madrid and maybe
              Benfica. My card, which I need to enter the match as a spectator,
              is stamped Göztepe and I also have an expired Altınordu card. But
              I don't support them fr. I also like to play and watch basketball.
              I like the Euroleague more than the NBA because I prefer tactical
              games to show. I'm a huge Magnus Carlsen fan and I like to play
              chess. And Finally, I play billiards sometimes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
