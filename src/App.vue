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

        <div v-if="!this.$store.state.auth">
          <q-btn stretch flat label="Вход" to="/auth"/>
          <q-btn stretch flat label="Регистрация" to="/reg"/>
        </div>
        <div v-else>
          Привет, {{ $store.state.currUser['name'] }}!
          <q-btn stretch flat label="Выход" to="/auth" @click="signOut()"/>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="this.$store.state.auth"
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
        <q-item to="/profile">
          <q-item-section>
            <q-item-label>Профиль</q-item-label>
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
  },

  methods: {
    signOut () {
      this.$store.dispatch('signOut')
    }
  }

}
</script>

<style>
</style>
