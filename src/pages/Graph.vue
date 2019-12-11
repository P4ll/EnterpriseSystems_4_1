<template>
  <div class="small">
    <img alt="Quasar logo" src="../assets/logo.png">
    <div>
      <my-menu :currFuncName="currFuncName" :functionNames="functionNames" :functions="functions" :showDlg="showDlg" @closeEditDlg="showDlg = false" @setNewValue="check"/>
      <q-btn color="primary" label="Параметры..." class="q-ml-md" @click="showDlg = true"/>
    </div>
    <q-btn color = "primary" label = "Add new function" @click="addFunction()"></q-btn>
    <q-select outlined v-model="currFuncName" :options="functionNames" label="Функции" />
    <q-input outlined v-model="A" label="A" />
    <q-input outlined v-model="B" label="B" />
    <q-input outlined v-model="C" label="C" />
    <q-input outlined v-model="start" label="From" />
    <q-input outlined v-model="end" label="To" />
    <q-input
        outlined
        label="Color"
        v-model="color"
        class="my-input"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color v-model="color" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    <line-chart :chart-data="datacollection" :options="globalChartOptions"></line-chart>
  </div>
</template>

<script>
import LineChart from '../components/LineCharts.js'
import MyMenu from '../components/Menu.vue'
import { QBtn, QInput, QColor, QSelect } from 'quasar'

export default {
  components: {
    LineChart,
    QBtn,
    QInput,
    QColor,
    QSelect,
    MyMenu
  },

  data () {
    return {
      datacollection: null,
      globalChartOptions: null,
      currFuncName: '',
      functionNames: [],
      functions: this.$store.getters.getCurrUser['functions'],
      start: -10,
      end: 10,
      xAxesVals: [],
      A: 1,
      B: 0,
      C: 0,
      color: '#F00',
      chartParams: {
        start: -10,
        end: 10
      },
      isNewFunc: false,
      showDlg: null
    }
  },

  watch: {
    currFuncName (newVal, oldVal) {
      this.isNewFunc = true
    }
  },

  created () {
    this.datacollection = {}
    this.xAxesVals = this.generateSequence(this.start, this.end)
    for (var funcName in this.functions) {
      this.functionNames.push(funcName)
    }
    this.currFuncName = this.functionNames[0]
    this.globalChartOptions = {
      responisve: true,
      title: {
        display: true,
        text: 'График функции Ax^2 + Bx + C'
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLable: {
            display: true,
            labelString: 'x'
          }
        }],
        yAxes: [{
          display: true,
          scaleLable: {
            display: true,
            labelString: 'y'
          }
        }]
      }
    }
  },

  mounted () {
    this.updateChart()
  },

  beforeUpdate () {
    if (this.isNewFunc) {
      this.isNewFunc = false
      this.updateIntefaceParams()
    } else {
      this.parseParams()
    }
    this.updateChart()
  },

  methods: {
    check (currFuncName, functionNames, functions) {
      this.currFuncName = currFuncName
      this.functionNames = functionNames
      this.functions = functions

      this.updateIntefaceParams()
      this.showDlg = false
    },

    updateIntefaceParams () {
      this.A = this.functions[this.currFuncName]['A']
      this.B = this.functions[this.currFuncName]['B']
      this.C = this.functions[this.currFuncName]['C']
      this.color = this.functions[this.currFuncName]['color']
    },

    addFunction () {
      let newName = 'f' + (this.functionNames.length + 1)
      this.functionNames.push(newName)
      this.functions[newName] = {
        A: 1,
        B: 1,
        C: 1,
        color: '#F00'
      }
      this.currFuncName = newName
      this.isNewFunc = true
    },

    updateChart () {
      this.xAxesVals = this.generateSequence(this.chartParams['start'], this.chartParams['end'])
      let data = []
      this.functionNames.forEach(name => {
        data.push({
          label: name,
          backgroundColor: this.functions[name]['color'],
          borderColor: this.functions[name]['color'],
          fill: false,
          data: this.myFuncVec(this.xAxesVals, this.functions[name]['A'], this.functions[name]['B'], this.functions[name]['C'])
        })
      })

      this.datacollection = {
        labels: this.xAxesVals,
        datasets: data
      }
    },

    parseParams () {
      let a = Number(this.A)
      let b = Number(this.B)
      let c = Number(this.C)
      let start = Number(this.start)
      let end = Number(this.end)

      if (!(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(start) || isNaN(end))) {
        this.functions[this.currFuncName]['A'] = a
        this.functions[this.currFuncName]['B'] = b
        this.functions[this.currFuncName]['C'] = c
        this.functions[this.currFuncName]['color'] = this.color

        this.chartParams['start'] = start
        this.chartParams['end'] = end
      }
    },

    myFunc (x, a, b, c) {
      return a * x * x + b * x + c
    },

    myFuncVec (x, a, b, c) {
      let arr = []
      x.forEach(val => {
        arr.push(this.myFunc(val, a, b, c))
      })
      return arr
    },

    generateSequence (start, end, step = 1) {
      let arr = []
      for (let i = start; i <= end; i += step) {
        arr.push(i)
      }
      return arr
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
