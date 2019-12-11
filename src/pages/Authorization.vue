<template>
  <div class="small">
    <img alt="Quasar logo" src="../assets/logo.png">
    <div v-if="!this.$store.state.auth">
      <q-input
        v-model="login"
        label="Логин"
      />
      <q-input
        v-model="password"
        label="Пароль"
        type="password"
      />
      <q-btn color = "primary" label = "Войти" @click="signIn()"/>
      <div>{{ generalMsg }}</div>
    </div>
    <div v-else>
      {{ authSuccMsg }}
    </div>
  </div>
</template>

<script>
import { QBtn, QInput } from 'quasar'

export default {
  components: {
    QBtn,
    QInput
  },

  data () {
    return {
      login: '',
      password: '',
      authError: false,
      generalMsg: 'Введите логин и пароль!',
      authInit: 'Введите логин и пароль!',
      authErrorMsg: 'Ошибка авторизации!',
      authSuccMsg: 'Авторизация прошла успешно!'
    }
  },

  watch: {

  },

  created () {

  },

  mounted () {

  },

  beforeUpdate () {

  },

  methods: {
    signIn () {
      let userMissing = !(this.login in this.$store.getters.getLogins)
      let md5 = require('md5')
      let users = this.$store.getters.getUsers
      let wrongPassword = users[this.$store.getters.getLogins[this.login]]['password'] !== md5(this.password)
      this.authError = userMissing || wrongPassword
      if (!this.authError) {
        this.$store.dispatch('signIn', this.login)
        this.generalMsg = this.authSuccMsg
      } else {
        this.generalMsg = this.authErrorMsg
      }
    }
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
