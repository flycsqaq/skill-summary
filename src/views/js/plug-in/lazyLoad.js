// 自动移除监听事件，
// 如何数据驱动
// addListener, addInterval, start
// demo: const lazy = new Lazy({}) lazy.addListener({}).addInterval({}).start()
export default class Lazy {
  constructor({ parent = document, search = 'lazy-load', extend = 10 }) {
    this.elements = []
    this.listeners = []
    this.interval = []
    this.parent = parent
    this.search = search
    this.extend = extend
    this.timeId = null
    this.state = 'unLoad'
    this.lazyNum = 0
    this.fns = {
      default: () => {
        this.update({})
      },
      throttle: () => {
        let active = false
        let current = 0
        let interval = null
        clearTimeout(this.timeId)
        for (var i = 0; !active && i < this.interval.length; i++) {
          interval = this.interval[i]
          current = interval.fn()
          if (Math.abs(interval.lastValue - current) >= interval.num) {
            interval.lastValue = current
            active = true
          }
        }
        if (active) {
          this.update({})
        } else {
          this.timeId = setTimeout(this.fn, 1000)
        }
      }
    }
    this.fn = this.fns.default
    this.district = {
      lastX: window.scrollX,
      lastY: window.scrollY,
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  setUp() {
    const { district } = this
    district.lastX = window.scrollX
    district.lastY = window.scrollY
    district.width = window.innerWidth
    district.height = window.innerHeight
    this.popularElements()
  }

  popularElements() {
    this.elements = []
    this.parent.querySelectorAll(`[${this.search}]`).forEach(this.addElement, this)
  }

  addElement(el) {
    const { search, district } = this
    if (!(el.attributes[search] && el.attributes[search].value)) {
      // console.log(`${el} dont have ${search}`);
      return
    }
    const { top, bottom, left, right } = el.getBoundingClientRect()
    const { lastX, lastY } = district
    const location = {
      top: top + lastY,
      bottom: bottom + lastY,
      left: left + lastX,
      right: right + lastX
    }
    const o = { el, location, isLoad: false }
    this.elements.push(o)
    this.loadImages(o)
    this.lazyNum++
  }

  loadImages(o) {
    const { location, el } = o
    if (!o.isLoad) {
      if (this.judge(location)) {
        const { search } = this
        if (el.attributes[search] && el.attributes[search].value) {
          el.src = el.attributes[search].value
          el.attributes.removeNamedItem(search)
          o.isLoad = true
          this.lazyNum--
          if (this.lazyNum === 0) {
            this.state = 'unLoad'
            this.destory()
          }
        }
      }
    }
  }

  update({ x = window.scrollX, y = window.scrollY }) {
    this.district.lastX = x
    this.district.lastY = y
    if (this.state === 'upLoad') {
      this.elements.forEach(this.loadImages, this)
    }
  }

  addListener({ el = document, event = 'scroll' }) {
    this.listeners.push({ el, event, isWork: false })
    return this
  }

  startListen(o) {
    const { el, event } = o
    if (!o.isWork) {
      el.addEventListener(event, this.fn)
      o.isWork = true
    }
  }

  finishListen(o) {
    const { el, event } = o
    if (o.isWork) {
      el.removeEventListener(event, this.fn)
      o.isWork = false
    }
  }

  addInterval({ name = 'time', fn = () => new Date(), num = 200 }) {
    this.interval.push({ name, fn, num, lastValue: fn() })
    this.changeFn('throttle')
    return this
  }

  changeFn(name) {
    this.fn = this.fns[name]
  }

  start() {
    this.setUp()
    if (this.listeners.length === 0) {
      this.addListener({})
    }
    this.state = 'upLoad'
    this.listeners.forEach(this.startListen, this)
  }

  destory() {
    this.listeners.forEach(this.finishListen, this)
  }

  judge(location) {
    const { district, extend } = this
    const { lastX, width, lastY, height } = district
    const { left, right, top, bottom } = location
    return right >= lastX - extend && left <= lastX + width + extend && bottom >= lastY - extend && top <= lastY + height + extend
  }
}
