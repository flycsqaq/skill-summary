export default {
  name: 'JavaScript',
  path: '/js',
  component: () => import('./index.vue'),
  children: [
    {
      name: '懒加载',
      path: 'lazy',
      component: () => import('./lazyLoad.vue')
    },
    {
      name: '轮播图',
      path: 'viewpager',
      component: () => import('./viewpager.vue')
    }
  ]
}
