export default {
  name: 'HTML5',
  path: '/html5',
  component: () => import('./index.vue'),
  children: [
    {
      name: 'canvas',
      path: 'canvas',
      component: () => import('./canvas.vue')
    }
  ]
}
