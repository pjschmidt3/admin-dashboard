<template>
    <q-item
        :to="{ name: link }"
        clickable
        tag="a">
        <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
        </q-item-section>

        <q-item-section>
            <q-item-label>{{ title }}</q-item-label>

            <q-item-label v-if="caption" caption>
                {{ caption }}
            </q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
export default {
  name: "AppSideNavItem",

  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      required: false,
      default: ''
    },

    link: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>