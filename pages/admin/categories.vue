<template>
  <div>
    <a-button type="primary">Add</a-button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})
const categories = (await useFetch('/api/categories')).data
console.log(categories.value);
</script>

<style scoped>

</style>