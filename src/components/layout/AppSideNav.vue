<template>
    <q-drawer
        v-model="sideNavOpen"
        bordered
        content-class="bg-grey-1"
        show-if-above>
        <q-list>
            <q-item-label
                class="text-grey-8"
                header />

            <app-side-nav-item
                v-for="item in sideNavItems"
                :key="item.title"
                v-bind="item" />
        </q-list>
    </q-drawer>
</template>

<script>

import AppSideNavItem from 'components/layout/AppSideNavItem'

export default {
  name: "AppSideNav",

  props: {
    open: Boolean
  },

  data () {
    return {
      sideNavItems: [
        {
          title: 'Dashboard',
          icon: 'fas fa-home',
          link: 'app.admin.dashboard'
        }, {
          title: 'Users',
          icon: 'fas fa-user',
          link: 'app.admin.user.index'
        }, {
          title: 'Settings',
          icon: 'fas fa-cog',
          link: 'app.admin.settings'
        }
      ]
    }
  },

  computed: {
    sideNavOpen: {
      get () {
        return this.open
      },

      set (isOpen) {
        this.$emit('update:open', isOpen)
      }
    }
  },

  components: {
    AppSideNavItem
  }
}
</script>

<style scoped>

</style>