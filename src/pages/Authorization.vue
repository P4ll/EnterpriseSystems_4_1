<template>
  <div class="small">
    <img alt="Quasar logo" src="../assets/logo.png">
    <q-input
      v-model="login"
      label="Логин"
    />
    <q-input
      v-model="password"
      label="Пароль"
    />
    <q-btn color = "primary" label = "Войти" @click="signIn()"/>
    <div> {{ generalMsg }} </div>
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
      this.authError = !(this.login === this.$store.state.login && this.password === this.$store.state.password)
      if (!this.authError) {
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
