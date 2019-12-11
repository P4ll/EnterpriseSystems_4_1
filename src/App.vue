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
        <q-btn-dropdown stretch flat :label="$store.getters.getLang">
        <q-list>
          <q-item-section>
            <q-btn stretch flat label="ru" @click="changeLang('ru')"/>
          </q-item-section>
          <q-separator/>
          <q-item-section>
            <q-btn stretch flat label="en" @click="changeLang('en')"/>
          </q-item-section>
        </q-list>
        </q-btn-dropdown>
        <div v-if="!this.$store.state.auth">
          <q-btn stretch flat :label="$t('app.signInLabel')" to="/auth"/>
          <q-btn stretch flat :label="$t('app.registrationLabel')" to="/reg"/>
        </div>
        <div v-else>
          {{$t('app.greetings') + ', ' + $store.state.currUser['name'] }}!
          <q-btn stretch flat :label="$t('app.signOutLabel')" to="/auth" @click="signOut()"/>
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
        <q-item-label header>{{ $t('app.menuLabel') }}</q-item-label>
        <q-item to="/graph">
          <q-item-section avatar>
             <q-icon name="show_chart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t('app.graphsLabel') }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/profile">
          <q-item-section>
            <q-item-label>{{ $t('app.profileLabel') }}</q-item-label>
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
    },

    changeLang (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLang', lang)
    }
  }

}
</script>

<style>
</style>
