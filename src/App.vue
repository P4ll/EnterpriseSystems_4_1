<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div v-if="$store.auth">
          <router-link class="nav-link" to="/auth"/>
          <router-link class="nav-link" to="/reg"/>
        </div>
        <div v-else>
          <router-link class="nav-link" to="/graph"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Меню проекта</q-item-label>
        <q-item to="/graph">
          <q-item-section avatar>
             <q-icon name="show_chart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>График</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import Graph from './pages/Graph.vue'

export default {
  name: 'LayoutDefault',

  components: {

  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
