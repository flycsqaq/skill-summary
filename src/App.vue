<template>
  <div id="app">
    <Sidebar />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import Sidebar from './views/sidebar/index.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style lang="stylus">

</style>
