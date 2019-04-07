export default class Canvas {
  constructor(el, type) {
    this.canvas = document.getElementById(el)
    this.context = this.canvas.getContext(type)
  }

  save() {
    this.context.save()
    return this
  }

  changeStyle(payload) {
    const { context } = this
    const attrs = Object.keys(payload)
    let attr
    for (let i = 0; i < attrs.length; i += 1) {
      attr = attrs[i]
      context[attr] = payload[attr]
    }
    return this
  }

  fill() {
    this.context.fill()
    return this
  }

  translate(x = 0, y = 0) {
    this.context.translate(x, y)
    return this
  }

  stroke() {
    this.context.stroke()
    return this
  }

  restore() {
    this.context.restore()
    return this
  }

  // 水平缩放/倾斜，垂直倾斜/缩放，水平/垂直位移
  transfrom(xz = 1, xs = 1, ys = 0, yz = 1, xm = 0, ym = 0) {
    this.context.transform(xz, xs, ys, yz, xm, ym)
    return this
  }

  scale(x, y) {
    this.context.scale(x, y)
    return this
  }

  fillRect(x = 0, y = 0, w = 0, h = 0) {
    this.context.fillRect(x, y, w, h)
    return this
  }

  fillText(text = '', x = 0, y = 0, maxWidth = 0) {
    this.context.fillText(text, x, y, maxWidth)
    return this
  }

  createTrueLine() {
    const { context } = this
    context.beginPath()
    context.moveTo(-25, -50)
    context.lineTo(-10, -80)
    context.lineTo(-20, -80)
    context.lineTo(-5, -110)
    context.lineTo(-15, -110)
    context.lineTo(0, -140)
    context.lineTo(15, -110)
    context.lineTo(5, -110)
    context.lineTo(20, -80)
    context.lineTo(10, -80)
    context.lineTo(25, -50)
    context.closePath()
    return this
  }

  createCurve() {
    const { context } = this
    context.beginPath()
    context.moveTo(0, 0)
    context.quadraticCurveTo(170, -50, 260, -190)
    context.quadraticCurveTo(310, -250, 410, -150)
    context.strokeStyle = '#663300'
    context.lineWidth = 20
    return this
  }

  drawTrue() {
    const { context } = this
    const trunkGradient = context.createLinearGradient(-5, -50, 5, -50)
    trunkGradient.addColorStop(0, '#663300')
    trunkGradient.addColorStop(0.4, '#996600')
    trunkGradient.addColorStop(1, '#552200')
    const canopyShadow = context.createLinearGradient(0, -50, 0, 0)
    canopyShadow.addColorStop(0, 'rgba(0, 0, 0, 0.5)')
    canopyShadow.addColorStop(0.2, 'rgba(0, 0, 0, 0.0)')
    canopyShadow.fillStyle = canopyShadow
    context.fillRect(-5, -50, 10, 50)
    this.save()
      .transfrom(1, 0, -0.5, 1, 0, 0)
      .scale(1, 0.6)
      .changeStyle({
        fillStyle: 'rgba(0, 0, 0, 0.2)',
        strokeStyle: 'rgba(0, 0, 0, 0.2)'
      })
      .fillRect(-5, -50, 10, 50)
      .createTrueLine()
      .stroke()
      .fill()
      .restore()
      .changeStyle({
        lineWidth: 4,
        lineJoin: 'round',
        strokeStyle: '#663300',
        fillStyle: '#339900'
      })
      .createTrueLine()
      .stroke()
      .fill()
      .changeStyle({
        fillStyle: trunkGradient
      })
      .fillRect(-5, -50, 10, 50)
      .changeStyle({
        fillStyle: canopyShadow
      })
      .fillRect(-5, -50, 10, 50)
    return this
  }

  createText(text) {
    this.changeStyle({
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffsetX: 15,
      shadowOffsetY: -10,
      shadowBlur: 2,
      font: '60px impact',
      fillStyle: '#996600',
      textAlign: 'center'
    }).fillText(text, 200, 60, 400).restore()
    return this
  }
}
