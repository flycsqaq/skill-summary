<template>
  <nav class="sidebar">
    <ul>
      <li
        v-for="(route, index) in $router.options.routes"
        :key="index">
        {{ route.name }}
        <Tree v-if="route.children" :parent="route.path" :childrenRouter="route.children" />
      </li>
    </ul>
  </nav>
</template>
<script>
import Tree from './tree.vue';

export default {
  name: 'Sidebar',
  components: {
    Tree,
  },
};
</script>

<style lang="stylus">
</style>
