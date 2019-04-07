<template>
  <div class="three-columns">
    <h1>flex</h1>
    <section>
      <div class="left" />
      <div class="middle" />
      <div class="right" />
    </section>
    <h1>float</h1>
    <section>
      <div class="left" />
      <div class="right" />
      <div class="middle" />
    </section>
    <h1>position</h1>
    <section>
      <div class="left" />
      <div class="middle" />
      <div class="right" />
    </section>
  </div>
</template>
<script>
export default {
  name: 'ThreeLayout'
}
</script>

<style lang="stylus">
  .three-columns
    section
      margin-bottom 50px
      width 100%
      div
        height 200px
        background #ccffeb
      .left
        background #58a
      .right
        background #fb3
    section:nth-of-type(1)
      display flex
      .left, .right
        flex-basis 100px
      .middle
        flex-grow 1
    section:nth-of-type(2)
      .left, .right
        width 100px
      .left
        float left
      .middle
        width calc(100% - 200px)
        display inline-block
      .right
        float right
    section:last-of-type
      position relative
      div
        position absolute
      .left, .right
        width 100px
      .middle
        width calc(100% - 200px)
        left 100px
      .right
        right 0
</style>
