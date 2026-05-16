import { ref } from 'vue'

export function useApi() {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async (url, options = {}) => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(url, options)
      if (!res.ok) throw new Error(`Error ${res.status}`)
      data.value = await res.json()
    } catch (err) {
      // reintento una vez
      try {
        const res = await fetch(url, options)
        data.value = await res.json()
      } catch (err2) {
        error.value = err2.message
      }
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, fetchData }
}