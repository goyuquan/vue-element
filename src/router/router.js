import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import wrap from '../component/wrap.vue'
import pageNotFound from '../component/pageNotFound.vue'

Vue.use(VueRouter)

const config = {
  login: () => import('../page/auth/login.vue'),
  dashboard: () => import('../page/dashboard.vue'),

  setting: () => import('../page/setting/setting.vue'),
  user: {
    user: () => import(/* webpackChunkName: "user" */ '../page/user/user.vue'),
    userDetail: () => import(/* webpackChunkName: "user" */'../page/user/userDetail/userDetail.vue'),
  }
}

const routes = [
  {
    name: '首页',
    path: '/',
    component: wrap,
    children: [
      { name: '登录', path: 'login', component: config.login, meta: { escapeAuth: true } },
      { name: '设置', path: 'setting', component: config.setting },
      {
        name: '嵌套组件',
        path: 'user',
        component: wrap,
        children: [
          { name: '嵌套详情', path: 'detail', component: config.user.userDetail },
          { path: '', component: config.user.user }
        ]
      },
      { name: '仪表盘', path: 'dashboard', component: config.dashboard },
      { path: '', redirect: 'dashboard' },
      { name: '找不到页面', path: '*', component: config.pageNotFound }
    ]
  }
];

const mode = process.env.NODE_ENV === 'production' ? 'history' : 'hash'

const router = new VueRouter({
  routes,
  // mode, //不显示#
  linkActiveClass: 'active'
});

// const loggedIn = false
const loggedIn = store.getters.isAuthenticated //TODO

router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.escapeAuth)) { //路由守卫
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

router.afterEach((to, from) => {
  const too = []
  for (let v of to.matched) { too.push({name: v.name, path: v.path}) }
  store.commit('updateBreadcrumb', too) //更新面包屑
})

export default router;
