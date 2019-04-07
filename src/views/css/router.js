export default {
  name: 'CSS',
  path: '/css',
  component: () => import('./index.vue'),
  children: [
    {
      path: 'three',
      name: '三栏布局',
      component: () => import('./threeColumns.vue')
    },
    {
      path: 'center',
      name: '居中',
      component: () => import('./center.vue')
    }
  ]
}
