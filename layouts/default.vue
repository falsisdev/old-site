<script setup>
const { isMobileOrTablet } = useDevice();
</script>
<template>
  <div v-if="!isMobileOrTablet" class="grid grid-cols-8">
    <Navbar class="col-span-4 col-start-3 col-end-7 mt-10" />
    <div class="col-span-4 col-start-3 col-end-7">
      <slot />
    </div>
    <Footer class="col-span-4 col-start-3 col-end-7 mb-10" />
  </div>
  <div v-else class="mx-5 mt-5">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
