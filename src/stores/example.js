import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useExampleStore = defineStore('example', {
  state: () => {
    const user = reactive({
      name: 'John',
      lastname: 'Doe',
    })

    function sayHello() {
      console.log(`Hello ${user.name} !`)
    }

    return { user, sayHello }
  },
  persist: true, // true => save inside local storage and automaticaly get each visit | lib: pinia-plugin-persistedstate
})
