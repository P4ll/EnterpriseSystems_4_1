<template>
  <div class="small">
    <img alt="Quasar logo" src="../assets/logo.png">
    <q-input
      v-model="name"
      label="Имя"
      :error="nameError"
      :error-message="nameErrorMsg"
    />
    <q-input
      v-model="login"
      label="Логин"
      :error="loginError"
      :error-message="loginErrorMsg"
    />
    <q-input
      v-model="password"
      label="Пароль"
      type="password"
      :error="passwordError"
      :error-message="passwordErrorMsg"
    />
    <q-input
      v-model="passwordConf"
      label="Подтверждение пароля"
      type="password"
      :error="passwordConfError"
      :error-message="passwordConfErrorMsg"
    />
    <q-input
      v-model="passport"
      label="Паспорт"
      mask="####-######"
      hint="Маска: ####-######"
      :error="passportError"
      :error-message="passportErrorMsg"
    />
    <q-input
      v-model="birthday"
      mask="##.##.####"
      hint="Маска: ##.##.####"
      label="Дата рождения"
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
    <q-btn color = "primary" label = "Сохранить" @click="saveChanges()"/>
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
      name: this.$store.state.currUser['name'],
      login: this.$store.state.currUser['login'],
      password: this.$store.state.currUser['password'],
      passwordConf: this.$store.state.currUser['password'],
      passport: this.$store.state.currUser['passport'],
      birthday: this.$store.state.currUser['birthday'],
      nameError: false,
      loginError: false,
      passwordError: false,
      passwordConfError: false,
      passportError: false,
      birthdayError: false,
      nameErrorMsg: '',
      loginErrorMsg: '',
      passwordErrorMsg: '',
      passwordConfErrorMsg: '',
      passportErrorMsg: '',
      birthdayErrorMsg: ''
    }
  },

  watch: {
    name (newVal, oldVal) {
      this.nameError = newVal === ''
      this.nameErrorMsg = 'Имя не может быть пустым!'
    },

    login (newVal, oldVal) {
      let reg = /[a-zA-Z]/
      this.loginError = !reg.test(newVal) || newVal === ''
      this.loginErrorMsg = 'Логин не должен быть пустым или содержать символы отличные от английского алфавита!'
    },

    password (newVal, oldVal) {
      this.passwordError = newVal.length < 3
      this.passwordErrorMsg = 'Длинна пароля должна составлять не менее 3 символов!'
    },

    passwordConf (newVal, oldVal) {
      this.passwordConfError = newVal !== this.password
      this.passwordConfErrorMsg = 'Пароли не совпадают!'
    },

    passport (newVal, oldVal) {
      let reg = /[0-9]{4}-[0-9]{6}/
      this.passportError = !reg.test(newVal)
      this.passportErrorMsg = 'Пспортные данные должны соответствовать шаблону XXXX-XXXXXX!'
    },

    birthday (newVal, oldVal) {
      let vals = newVal.split('.')
      if (vals.length !== 3) {
        this.birthdayError = true
        return
      }
      vals = vals.map(Number)
      this.birthdayError = vals[0] > 31 || vals[0] === 0 || vals[1] > 12 || vals[1] === 0
      this.birthdayErrorMsg = 'Пспортные данные должны соответствовать шаблону DD.MM.YYYY!'
    }
  },

  created () {

  },

  mounted () {

  },

  beforeUpdate () {

  },

  methods: {
    saveChanges () {
      let user = {
        name: this.name,
        login: this.login,
        password: this.password,
        passport: this.passport,
        birthday: this.birthday,
        functions: this.$store.getters.getCurrUser['functions']
      }
      this.$store.dispatch('changeUser', user)
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
