<template>
  <div>
    <canvas id="canvas" width="400" height="550">
      Update yout browser to enjoy canvas!
    </canvas>
  </div>
</template>
<script>
import Canvas from './plug-in/canvas'

export default {
  name: 'Canvas',
  mounted() {
    this.handleDrawPic()
  },
  methods: {
    handleDrawPic() {
      const canvas = new Canvas('canvas', '2d')
      canvas.save()
        .translate(130, 250)
        .drawTrue()
        .restore()
        .save()
        .translate(260, 500)
        .scale(2, 2)
        .drawTrue()
        .restore()
        .save()
        .translate(-10, 350)
        .createCurve()
        .stroke()
        .restore()
        .createText('Happy')
        .restore()
    }
  }
}
</script>

<style lang="stylus">
  canvas
    border 1px solid black
    background #FFFFFF
    margin 0 5%
</style>
