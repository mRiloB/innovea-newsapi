<script lang='ts' setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])

const text = ref<string>("")

const search = () => emit('search', text.value)
</script>

<template>
  <div class="search-bar py">
    <input class="px" type="text" v-model="text">
    <button class="px" @click="search">search</button>
  </div>
</template>

<style scoped>
input,
button {
  border: 1px solid #ccc;
  height: 40px;
  border-radius: 5px;
}

input {
  margin-right: 8px;
  width: 230px;
}

button:hover {
  cursor: pointer;
}
</style>
