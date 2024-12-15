<script setup lang="ts">

useHead({
  title: 'Home',
  meta: [
    { name: 'description', 
      content: 'Home FLuke Nuxt3, Ratchanon IT' 
    },
    {
      name: 'keyword',
      content: 'Home'
    },
    {
      name: 'Author',
      content: 'Ratchanon Decha'
    }
  ],
})

</script>

<template>
  <div>
    
    <section
      id="catfluke"
      class="bg-skin-fill sm:h-screen grid place-items-center -mt-1 sm:mt-0 hero-default"
    >
      <div
        class="container mx-auto px-4 xl:px-0 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-20"
      >
        <div class="w-full sm:w-6/12">
          <h1 class="text-4xl sm:text-6xl font-bold xl:leading-[4rem] text-skin-base">
            Nuxt 3 Tailwind Fluke
          </h1>
          <p class="text-xl mt-4 mb-14 text-skin-muted">
            Nuxt 3 Fluke + Tailwind CSS for Starter kit
            <br>ภาษาไทย
          </p>
          <div class="space-x-4">
            <button class="btn btn-primary btn-xl">
              Get Starte
            </button>
          </div>
        </div>
        <div class="w-full sm:w-6/12 flex justify-end p-6 sm:p-0">
          <img loading="lazy" src="~/assets/images/catfluke.jpg" alt="" class="w-auto rounded-lg">
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped></style>
