<template>
  <div class="lazy-laod">
    <img v-for="(im, index) in imgs" :key="index" :lazy-load="im()">
  </div>
</template>
<script>
import Lazy from './plug-in/lazyLoad'

let lazy = null
export default {
  name: 'LazySample',
  data() {
    return {
      imgs: [
        () => require('@/static/img/Sylvanas1.jpg'),
        () => require('@/static/img/Sylvanas2.jpg'),
        () => require('@/static/img/Sylvanas3.jpg'),
        () => require('@/static/img/Sylvanas4.jpg'),
        () => require('@/static/img/Sylvanas5.jpg'),
        () => require('@/static/img/Sylvanas6.jpg'),
        () => require('@/static/img/Sylvanas7.jpg'),
        () => require('@/static/img/Sylvanas8.jpg'),
        () => require('@/static/img/Sylvanas9.jpg'),
        () => require('@/static/img/Sylvanas10.jpg')
      ],
      lazy: null
    }
  },
  mounted() {
    lazy = new Lazy({})
    lazy.addListener({})
      .addListener({ event: 'click' })
      .addInterval({ num: 1000 })
      .addInterval({ name: 'scrollY', fn: () => window.scrollY, num: 500 })
      .start()
  },
  destroyed() {
    lazy.destory()
  }
}
</script>

<style lang="stylus">
  .lazy-laod
    img
      width 400px
      height 300px
      display block
</style>
