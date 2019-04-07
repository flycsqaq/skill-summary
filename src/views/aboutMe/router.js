export default {
  name: '关于我',
  path: '/aboutme',
  component: () => import('./index.vue'),
  children: [
    {
      name: '简历',
      path: 'resume',
      component: () => import('./resume.vue')
    },
    {
      name: '网站',
      path: 'web',
      component: () => import('./web.vue')
    }
  ]
}
