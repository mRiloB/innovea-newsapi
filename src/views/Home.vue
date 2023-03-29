<script lang='ts' setup>
import { ref } from 'vue'
import { Article } from '../models/global'
import { useAxios } from '../composables/axios'
import SearchBar from '../components/SearchBar.vue'
import NewsFeed from '../components/NewsFeed.vue'

const api = useAxios()
const articles = ref<Article[]>([])

const search = async (text: string) => {
  if (!text) return

  try {
    const ret = await api._get(text)
    if (ret)
      articles.value = ret.articles
  } catch (err) {
    alert(err)
  }
}
</script>

<template>
  <div>
    <h1>News API</h1>
    <p>Search through millions of articles from over 80,000 large and small news sources and blogs.</p>
    <SearchBar @search="search" />
    <NewsFeed :articles="articles" />
  </div>
</template>

<style scoped></style>
