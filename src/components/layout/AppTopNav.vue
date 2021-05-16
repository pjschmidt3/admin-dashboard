<template>
    <q-toolbar>
        <q-btn aria-label="Menu" dense flat icon="menu" round @click="toggleSideNav" />

        <q-toolbar-title>
            Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
</template>

<script>
export default {
  name: "AppTopNav",

  methods: {
    toggleSideNav () {
      this.$emit('toggle')
    }
  },

  emits: ['toggle']
}
</script>

<style scoped>

</style>