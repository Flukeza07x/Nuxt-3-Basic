<script setup lang="ts">
const route = useRoute()
  console.log(route.params.slug);

</script>
<template>
  <div>
    Page: backend_Fluke/[...slug] = {{ $route.params.slug }}
    <h2>FlukeArray : {{ $route.params.slug }}</h2>
    <h2>FlukeArray : {{ $route.params.slug[0] }}</h2>
    <h2>FlukeArray : {{ $route.params.slug[1] }}</h2>
    <h2>FlukeArray : {{ $route.params.slug[2] }}</h2>
    <h2>FlukeArray : {{ $route.params.slug[3] }}</h2>
    
   
  </div>
</template>

<style scoped></style>
