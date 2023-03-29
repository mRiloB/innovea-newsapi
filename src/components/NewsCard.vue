<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{
  title: string
  description: string
  author: string
  url: string
  image: string
  publishedAt: string
  source: string
}>()

const { title, description, author, url, image, publishedAt, source } = toRefs(props)
const fmt_date = (date: string) => new Date(date).toDateString()
const _open = () => open(url.value, '_blank')
</script>

<template>
  <div class="card pa" @click="_open">
    <div class="image">
      <img :src="image" :alt="source" v-if="image">
      <img src="../assets/no-photo.png" :alt="source" v-else>
    </div>
    <div class="content">
      <p class="title">{{ title }}</p>
      <p class="description" v-html="description"></p>
      <p class="author">{{ author || 'unknown author' }} | {{ source }} - {{ fmt_date(publishedAt) }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: justify;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
}
.image img {
  width: 100%;
  height: 200px;
}
.title {
  font-weight: bold;
  font-size: 1.2em;
}
.description {
  font-size: .9em;
  margin: 8px 0;
}
.author {
  font-size: .7em;
}

@media screen and (min-width: 680px) {
  .card {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 170px;
  }
  .image {
    margin-right: 10px;
  }
  .image img {
    width: 200px;
    height: 150px;
    object-fit: fill;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
  }
}
</style>
