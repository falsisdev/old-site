<template>
  <main id="spotifycheck" class="hidden">
    <div role="alert" class="alert alert-warning flex flex-row">
      <img
        id="albumart"
        src="https://i.pinimg.com/originals/ac/11/aa/ac11aa2add3b0193c8769e0a17d13535.jpg"
        class="w-12 h-12 rounded-lg -my-2"
      />
      <span class="flex flex-col">
        <b id="title" class="text-md -my-1">Yükleniyor...</b>
        <span id="artist" class="text-xs">Yükleniyor...</span>
      </span>
      <spam class="grow" />
      <span class="tooltip mt-1" data-tip="Listening to Spotify">
        <Icon name="mdi:spotify" class="w-5 h-5" />
      </span>
    </div>
  </main>
</template>
