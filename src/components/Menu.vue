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
          <q-toolbar-title>{{ $t('graph.menu.title') }}</q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeDlg"></q-btn>
        </q-toolbar>
      </q-header>
      <q-footer class="bg-primary">
        <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
          <q-btn :label="$t('graph.menu.cancel')" @click="closeDlg()" class="q-mr-sm" />
          <q-btn :label="$t('graph.menu.save')" @click="submit()" />
        </q-toolbar>
      </q-footer>
      <q-page-container>
        <q-page padding>
          <div class="doc-container q-pa-md">
              <q-input
               v-model="aForm"
               :label="$t('graph.menu.paramA')"
               :error="aError"
               :error-message="aErrorMsg"
              />
              <q-input
               v-model="bForm"
               :label="$t('graph.menu.paramB')"
               :error="bError"
               :error-message="bErrorMsg"
              />
              <q-input
               v-model="cForm"
               :label="$t('graph.menu.paramC')"
               :error="cError"
               :error-message="cErrorMsg"
              />
              <q-btn color = "primary" :label="$t('graph.newFunctionLabel')" @click="addFunction()"></q-btn>
              <q-select outlined v-model="currFuncNameTMP" :options="functionNamesTMP" :label="$t('graph.functionsLabel')" />
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
import { QInput, QDialog, QLayout, QFooter, QSelect, QBtn } from 'quasar'

export default {
  components: {
    QInput,
    QDialog,
    QFooter,
    QLayout,
    QSelect,
    QBtn
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
      emptyStrMsg: this.$t('graph.menu.errors.emptyStrMsg'),
      invalidNumberMsg: this.$t('graph.menu.errors.invalidNumberMsg'),
      currFuncNameTMP: null,
      functionsTMP: {},
      functionNamesTMP: null
    }
  },

  props: {
    showDlg: null,
    currFuncName: null,
    functions: null,
    functionNames: null
  },

  mounted () {

  },

  beforeUpdate () {
    this.emptyStrMsg = this.$t('graph.menu.errors.emptyStrMsg')
    this.invalidNumberMsg = this.$t('graph.menu.errors.invalidNumberMsg')
  },

  watch: {
    currFuncNameTMP (newVal, oldVal) {
      this.updateForm()
    },

    aForm (newVal, oldVal) {
      let isNumber = !isNaN(Number(newVal))
      this.aError = !isNumber || newVal === ''
      if (!isNumber) {
        this.aErrorMsg = this.invalidNumberMsg
      } else {
        this.aErrorMsg = this.emptyStrMsg
      }

      if (!this.aError) {
        this.functionsTMP[this.currFuncNameTMP]['A'] = Number(newVal)
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

      if (!this.aError) {
        this.functionsTMP[this.currFuncNameTMP]['B'] = Number(newVal)
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

      if (!this.aError) {
        this.functionsTMP[this.currFuncNameTMP]['C'] = Number(newVal)
      }
    }
  },

  methods: {
    updateForm () {
      this.aForm = this.functionsTMP[this.currFuncNameTMP]['A']
      this.bForm = this.functionsTMP[this.currFuncNameTMP]['B']
      this.cForm = this.functionsTMP[this.currFuncNameTMP]['C']
    },

    addFunction () {
      let newName = 'f' + (this.functionNamesTMP.length + 1)
      this.functionNamesTMP.push(newName)
      this.functionsTMP[newName] = {
        A: 1,
        B: 1,
        C: 1,
        color: '#F00'
      }
      this.currFuncNameTMP = newName
    },

    onShow () {
      this.currFuncNameTMP = this.currFuncName
      // copy functions
      for (var func in this.functions) {
        this.functionsTMP[func] = { ...(this.functions[func]) }
      }
      this.functionNamesTMP = this.functionNames.slice()
      this.updateForm()
    },

    submit () {
      this.$emit('setNewValue', this.currFuncNameTMP, this.functionNamesTMP, this.functionsTMP)
    },

    closeDlg () {
      this.$emit('closeEditDlg')
    }
  }

}
</script>
