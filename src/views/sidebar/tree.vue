<template>
  <ul>
    <li v-for="(route, index) in childrenRouter" :key="index">
      <router-link :to="{ name: route.name }">
        {{ route.name }}
      </router-link>
      <template v-if="route.children">
        <Tree :childrenRouter="route.children" :parent="route.path" />
      </template>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Tree',
  props: {
    childrenRouter: {
      type: Array,
      required: true
    },
    parent: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">

</style>
