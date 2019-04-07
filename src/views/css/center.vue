<template>
  <div class="center">
    <h1>flex</h1>
    <section>
      <div />
    </section>
    <h1>relative and absolute</h1>
    <section>
      <div />
    </section>
    <h1>position and transform</h1>
    <section>
      <div />
    </section>
  </div>
</template>
<script>
export default {
  name: 'Center'
}
</script>

<style lang="stylus">
  .center
    section
      width 200px
      height 200px
      background #58a
      margin-bottom 10px
      >div
        width 100px
        height 100px
        background #fb3
    section:first-of-type
      display flex
      justify-content center
      align-items center
    section:nth-of-type(2)
      position relative
      div
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
    section:last-of-type
      position relative
      div
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
</style>
