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
      let md5 = require('md5')
      let passwordHash = md5(this.password)
      this.authError = !(this.login in this.$store.state.allLogins) || this.$store.state.users[this.$store.state.allLogins[this.login]]['password'] !== passwordHash
      if (!this.authError) {
        this.$store.state.currUser = this.$store.state.users[this.$store.state.allLogins[this.login]]
        this.$store.state.auth = true
        this.generalMsg = this.authSuccMsg
      } else {
        this.$store.state.auth = false
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
