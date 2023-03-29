import axios from 'axios'
import { Article } from '../models/global'

type NewsAPI = {
  articles: Article[]
  status: string
  totalResults: number
}

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    'X-Api-Key': import.meta.env.VITE_APIKEY
  }
})

export function useAxios () {
  const _get = async (text: string) => {
    try {
      const { data } = await api.get<NewsAPI>('/everything', { params: { page: 1, q: text, pageSize: 10 } })
      return data
    } catch (err) {
      console.log(err)
    }
  }

  return { _get }
}