<template>
  <div class="small">
    <img alt="Quasar logo" src="../assets/logo.png">
    <div v-if="!this.$store.state.auth">
      <q-input
        v-model="login"
        :label="$t('reg.login')"
      />
      <q-input
        v-model="password"
        :label="$t('reg.password')"
        type="password"
      />
      <q-btn color = "primary" :label="$t('auth.signIn')" @click="signIn()"/>
      <div>{{ generalMsg }}</div>
    </div>
    <div v-else>
      <div>{{ $t('auth.authSuccMsg') }}</div>
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
      generalMsg: this.$t('auth.generalMsg'),
      authInit: this.$t('auth.authInit'),
      authErrorMsg: this.$t('auth.authErrorMsg'),
      authSuccMsg: this.$t('auth.authSuccMsg'),
      isInit: true
    }
  },

  watch: {

  },

  created () {

  },

  mounted () {

  },

  beforeUpdate () {
    this.authInit = this.$t('auth.authInit')
    this.authErrorMsg = this.$t('auth.authErrorMsg')
    this.authSuccMsg = this.$t('auth.authSuccMsg')
    if (this.isInit) {
      this.generalMsg = this.$t('auth.generalMsg')
    } else if (!this.authError) {
      this.generalMsg = this.authSuccMsg
    } else {
      this.generalMsg = this.authErrorMsg
    }
  },

  methods: {
    signIn () {
      this.isInit = false
      let md5 = require('md5')
      let users = this.$store.getters.getUsers
      this.authError = !(this.login in this.$store.getters.getLogins) || users[this.$store.getters.getLogins[this.login]]['password'] !== md5(this.password)
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
