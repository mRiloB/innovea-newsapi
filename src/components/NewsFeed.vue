<script lang='ts' setup>
import { Article } from './../models/global'
import NewsCard from './NewsCard.vue'

defineProps<{
  articles: Article[]
}>()

</script>

<template>
  <div class="news-feed py">
    <NewsCard 
      v-for="(article, k) in articles" 
      :key="k" 
      :title="article.title" 
      :description="article.description"
      :author="article.author" 
      :url="article.url" 
      :image="article.urlToImage" 
      :publishedAt="article.publishedAt"
      :source="article.source.name" 
      v-if="articles.length > 0"
    />
    <p v-else>search for covid news or articles about economy...</p>
  </div>
</template>

<style scoped></style>
