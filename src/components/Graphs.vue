<template>
  <div class="small">
    <img alt="Quasar logo" src="../assets/logo.png">
    <q-btn color = "primary" label = "Add new function" @click="addFunction()"></q-btn>
    <q-select outlined v-model="currFuncName" :options="functionNames" label="Outlined" />
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
import { QBtn, QInput, QColor, QSelect } from 'quasar'
export default {
  components: {
    LineChart,
    QBtn,
    QInput,
    QColor,
    QSelect
  },

  data () {
    return {
      datacollection: null,
      globalChartOptions: null,
      currFuncName: 'f1',
      functionNames: ['f1'],
      functions: {
        f1: {
          A: 1,
          B: 1,
          C: 1,
          color: '#F00'
        }
      },
      start: -10,
      end: 10,
      xAxesVals: this.generateSequence(this.start, this.end),
      A: 1,
      B: 1,
      C: 1,
      color: '#F00',
      chartParams: {
        start: 10,
        end: 10
      },
      isNewFunc: false
    }
  },

  watch: {
    currFuncName (newVal, oldVal) {
      this.isNewFunc = true
    }
  },

  created () {
    this.datacollection = {}
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
