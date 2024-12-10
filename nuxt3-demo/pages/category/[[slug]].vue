<script setup lang="ts">
const route = useRoute()
console.log(route.params.slug);</script>

<template>
  <div>
    Page: category/[[{{$route.params.slug}}]]
    <h1>Category slug pages</h1>
  

<h2>Category: {{ $route.params.slug }}</h2>


</div>
</template>

<style scoped></style>
