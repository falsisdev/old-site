<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">falsis</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/"
            ><Icon name="mdi:home" class="w-5 h-5 mt-[1px]" /> Home</NuxtLink
          >
        </li>
        <li>
          <a><Icon name="mdi:blogger" class="w-5 h-5 mt-[1px]" /> Blog</a>
        </li>
        <li>
          <details>
            <summary>
              <Icon
                name="material-symbols:folder-copy"
                class="w-5 h-5 mt-[1px]"
              />
              Projects
            </summary>
            <ul class="bg-base-100 rounded-t-none p-2 z-50">
              <li>
                <a href="https://github.com/falsisdev/mangile">
                  <Icon name="mdi:github" class="w-5 h-5 mt-[1px]" /> Mangile</a
                >
              </li>
              <li>
                <a href="https://github.com/falsisdb/falsisdb"
                  ><Icon name="mdi:github" class="w-5 h-5 mt-[1px]" />
                  falsisdb</a
                >
              </li>
            </ul>
          </details>
        </li>
        <li>
          <NuxtLink to="/anilist"
            ><Icon name="simple-icons:anilist" class="w-5 h-5 mt-[1px]" />
            AniList</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/me"
            ><Icon name="mdi:person" class="w-5 h-5 mt-[1px]" /> Me</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
