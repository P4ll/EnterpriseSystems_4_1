<template>
  <q-dialog v-model="showDlg" @show="onShow()">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 450px"
      class="shadow-2 rounded-borders bg-white"
    >
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>Редактирование параметров</q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeDlg"></q-btn>
        </q-toolbar>
      </q-header>
      <q-footer class="bg-primary">
        <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
          <q-btn label="Отменить" @click="closeDlg()" class="q-mr-sm" />
          <q-btn label="Сохранить" @click="submit()" />
        </q-toolbar>
      </q-footer>
      <q-page-container>
        <q-page padding>
          <div class="doc-container q-pa-md">
              <q-input
               v-model="aForm"
               label="Параметр A"
               :error="aError"
               :error-message="aErrorMsg"
              />
              <q-input
               v-model="bForm"
               label="Параметр C"
               :error="bError"
               :error-message="bErrorMsg"
              />
              <q-input
               v-model="cForm"
               label="Параметр C"
               :error="cError"
               :error-message="cErrorMsg"
              />
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
import { QInput, QDialog, QLayout, QFooter } from 'quasar'

export default {
  components: {
    QInput,
    QDialog,
    QFooter,
    QLayout
  },

  data () {
    return {
      aForm: 0,
      bForm: 0,
      cForm: 0,
      aColor: 'green',
      bColor: 'green',
      cColor: 'green',
      aError: false,
      bError: false,
      cError: false,
      aErrorMsg: '',
      bErrorMsg: '',
      cErrorMsg: '',
      emptyStrMsg: 'Строка пуста!',
      invalidNumberMsg: 'Введенное значение не является числом!'
    }
  },

  props: {
    showDlg: null,
    a: null,
    b: null,
    c: null
  },

  watch: {
    aForm (newVal, oldVal) {
      let isNumber = !isNaN(Number(newVal))
      this.aError = !isNumber || newVal === ''
      if (!isNumber) {
        this.aErrorMsg = this.invalidNumberMsg
      } else {
        this.aErrorMsg = this.emptyStrMsg
      }
    },

    bForm (newVal, oldVal) {
      let isNumber = !isNaN(Number(newVal))
      this.bError = !isNumber || newVal === ''
      if (!isNumber) {
        this.bErrorMsg = this.invalidNumberMsg
      } else {
        this.bErrorMsg = this.emptyStrMsg
      }
    },

    cForm (newVal, oldVal) {
      let isNumber = !isNaN(Number(newVal))
      this.cError = !isNumber || newVal === ''
      if (!isNumber) {
        this.cErrorMsg = this.invalidNumberMsg
      } else {
        this.cErrorMsg = this.emptyStrMsg
      }
    }
  },

  methods: {
    onShow () {
      this.aForm = this.a
      this.bForm = this.b
      this.cForm = this.c
    },

    submit () {
      let form = {
        a: this.aForm,
        b: this.bForm,
        c: this.cForm
      }
      this.$emit('setNewValue', form)
    },

    closeDlg () {
      this.$emit('closeEditDlg')
    }
  }

}
</script>
