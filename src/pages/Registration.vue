<template>
  <div class="small">
    <img alt="Quasar logo" src="../assets/logo.png">
    <div v-if="!registrationSucc">
      <q-input
        v-model="name"
        :label="$t('reg.name')"
        :error="nameError"
        :error-message="nameErrorMsg"
      />
      <q-input
        v-model="login"
        :label="$t('reg.login')"
        :error="loginError"
        :error-message="loginErrorMsg"
      />
      <q-input
        v-model="password"
        :label="$t('reg.password')"
        type="password"
        :error="passwordError"
        :error-message="passwordErrorMsg"
      />
      <q-input
        v-model="passwordConf"
        :label="$t('reg.passwordConf')"
        type="password"
        :error="passwordConfError"
        :error-message="passwordConfErrorMsg"
      />
      <q-input
        v-model="passport"
        :label="$t('reg.passport')"
        mask="####-######"
        :hint="$t('reg.passportHint')"
        :error="passportError"
        :error-message="passportErrorMsg"
      />
      <q-input
        v-model="birthday"
        mask="##.##.####"
        :hint="$t('reg.birthdayHint')"
        :label="$t('reg.birthday')"
        :error="birthdayError"
        :error-message="birthdayErrorMsg"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="birthday" @input="() => $refs.qDateProxy.hide()" mask="DD.MM.YYYY"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-btn color = "primary" :label="$t('reg.signUp')" @click="signUp()"/>
      {{ registrationErrorMsg }}
    </div>
    <div v-else>
      {{ $t('reg.regSucc') }}
    </div>
  </div>
</template>

<script>
import { QBtn, QInput, QDate } from 'quasar'

export default {
  components: {
    QBtn,
    QInput,
    QDate
  },

  data () {
    return {
      name: '',
      login: '',
      password: '',
      passwordConf: '',
      passport: '',
      birthday: '',
      nameError: false,
      loginError: false,
      passwordError: false,
      passwordConfError: false,
      passportError: false,
      birthdayError: false,
      nameErrorMsg: this.$t('reg.errors.nameErrorMsg'),
      loginErrorMsg: this.$t('reg.errors.loginErrorMsg'),
      passwordErrorMsg: this.$t('reg.errors.passwordErrorMsg'),
      passwordConfErrorMsg: this.$t('reg.errors.passwordConfErrorMsg'),
      passportErrorMsg: this.$t('reg.errors.passportErrorMsg'),
      birthdayErrorMsg: this.$t('reg.errors.birthdayErrorMsg'),
      registrationErrorMsg: '',
      registrationSucc: false
    }
  },

  watch: {
    name (newVal, oldVal) {
      this.nameError = newVal === ''
    },

    login (newVal, oldVal) {
      let reg = /[a-zA-Z]/
      this.loginError = !reg.test(newVal) || newVal === ''
    },

    password (newVal, oldVal) {
      this.passwordError = newVal.length < 3
    },

    passwordConf (newVal, oldVal) {
      this.passwordConfError = newVal !== this.password
    },

    passport (newVal, oldVal) {
      let reg = /[0-9]{4}-[0-9]{6}/
      this.passportError = !reg.test(newVal)
    },

    birthday (newVal, oldVal) {
      let vals = newVal.split('.')
      if (vals.length !== 3) {
        this.birthdayError = true
        return
      }
      vals = vals.map(Number)
      this.birthdayError = vals[0] > 31 || vals[0] === 0 || vals[1] > 12 || vals[1] === 0
    }
  },

  created () {

  },

  mounted () {

  },

  beforeUpdate () {
    this.nameErrorMsg = this.$t('reg.errors.nameErrorMsg')
    this.loginErrorMsg = this.$t('reg.errors.loginErrorMsg')
    this.passwordErrorMsg = this.$t('reg.errors.passwordErrorMsg')
    this.passwordConfErrorMsg = this.$t('reg.errors.passwordConfErrorMsg')
    this.passportErrorMsg = this.$t('reg.errors.passportErrorMsg')
    this.birthdayErrorMsg = this.$t('reg.errors.birthdayErrorMsg')
  },

  methods: {
    signUp () {
      if (this.login in this.$store.state.allLogins) {
        this.registrationErrorMsg = this.$t('reg.errors.registrationErrorMsg')
        return
      }
      if (this.nameError || this.loginError || this.passwordError || this.passportError || this.birthdayError) {
        return
      }
      let user = {
        name: this.name,
        login: this.login,
        password: this.password,
        passport: this.passport,
        birthday: this.birthday,
        functions: {
          f1: {
            A: 1,
            B: 0,
            C: 0,
            color: '#F00'
          }
        }
      }
      this.$store.dispatch('addUser', user)
      this.registrationSucc = true
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
