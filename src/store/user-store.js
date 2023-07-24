import { defineStore } from 'pinia'
import { server } from 'src/boot/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    firstName: null,
    lastName: null,
    email: null
  }),
  getters: {
    getId: (state) => state.id,
    getFistName: (state) => state.firstName,
    getLastName: (state) => state.lastName,
    getEmail: (state) => state.email
  },
  actions: {
    async getSanctumCookie () {
      try {
        await server.get('sanctum/csrf-cookie')
      } catch (error) {
        if (error) throw error
      }
    },
    async login (email, password) {
      try {
        await server.post('login', { email, password })
      } catch (error) {
        if (error) throw error
      }
    },
    async fetchUser () {
      try {
        return await server.get('api/user')
      } catch (error) {
        if (error) throw error
      }
    },
    setUser (payload) {
      if (payload.id) this.id = payload.id
      if (payload.firName) this.id = payload.firName
      if (payload.lastName) this.id = payload.lastName
      if (payload.email) this.id = payload.email
    }
  },
  clearUser () {
    this.id = null
    this.firstName = null
    this.lastName = null
    this.email = null
  }
})
