<template>
  <div class="small">
    <img alt="Quasar logo" src="../assets/logo.png">
    <q-btn color = "primary" label = "Add new function" @click="addFunction()"></q-btn>
    <q-select outlined v-model="currFuncName" :options="functionNames" label="Функции" />
    <q-input outlined v-model="A" label="A" />
  </div>
</template>

<script>
import { QBtn, QInput, QSelect } from 'quasar'

export default {
  components: {
    QBtn,
    QInput,
    QSelect
  },

  data () {
    return {

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

  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
