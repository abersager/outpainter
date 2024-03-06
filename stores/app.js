import { defineStore } from 'pinia'

export default defineStore('app', {
  state: () => ({}),
  actions: {
    reset() {},
    async init() {},
    async createPrediction(body = null) {
      const res = await fetch('/api/prediction', {
        method: 'post',
        body: JSON.stringify({
          ...body
        })
      })
      return await res.json()
    }
  }
})
