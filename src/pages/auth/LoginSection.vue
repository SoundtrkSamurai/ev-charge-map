<template>
  <q-page id="loginPage">
    <q-toolbar class="text-white bg-teal-8">
      <q-toolbar-title>Login</q-toolbar-title>
    </q-toolbar>
    <q-scroll-area class="form-style">
      <div class="text-h6 text-center q-pt-md">
        <q-img src="/favicon.ico" height="60px" width="60px" />
        <div>EV Charge Map</div>
      </div>

      <div class="q-pa-md q-gutter-md ">
        <div class="text-center">Login and get extra features!</div>

        <q-input v-model="email" outlined stack-label label="Email">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>
        <q-input v-model="password" outlined stack-label label="Password">
          <template v-slot:append>
            <q-icon name="close" />
          </template>
        </q-input>

        <div>
          <q-btn @click="login" color="black" size="lg" class="full-width" label="Register" />
        </div>

        <div class="q-px-md q-mt-xl text-center">
          <div class="q-mb-md no-account">Don't have an account?</div>
          <q-btn color="teal" outline rounded to="/auth/register" size="15px">Register Here</q-btn>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { createPinia } from 'pinia'
import { useUserStore } from '../../store/user-store'

const userStore = useUserStore(createPinia())

const password = ref('')
const email = ref('')

const login = async () => {
  // Get the3 tokens/cookie
  await userStore.getSanctumCookie()
  // Login user
  await userStore.login(email.value, password.value)
  // Get the user
  const user = await userStore.fetchUser()
  console.log(user)
  // Set user data in localstorage (PINIA)
  userStore.setUser(user.data)
}
</script>

<style lang="scss">
  #loginPage {
    .form-style {
      margin: 0 auto;
      height: calc(100vh - 180px);
      max-width: 500px;
    }

    .no-account {
      font-size: 17px;
    }
  }
</style>
