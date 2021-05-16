<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <app-top-nav @toggle="toggleSideNav" />
        </q-header>

        <app-side-nav :open="sideNavOpen" />

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import AppTopNav from 'components/layout/AppTopNav'
import AppSideNav from 'components/layout/AppSideNav'

export default {
  name: 'MainLayout',

  data () {
    return {
      sideNavOpen: false
    }
  },

  methods: {
    toggleSideNav () {
      this.sideNavOpen = !this.sideNavOpen
    }
  },

  components: {
    AppTopNav,
    AppSideNav
  }
}
</script>
