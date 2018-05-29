import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import wrap from '../component/wrap.vue'
import pageNotFound from '../component/pageNotFound.vue'

Vue.use(VueRouter)

const config = {
  login: () => import('../page/auth/login.vue'),
  dashboard: () => import('../page/dashboard.vue'),

  user: {
    user: () => import(/* webpackChunkName: "user" */ '../page/user/user.vue'),
    create: () => import(/* webpackChunkName: "user" */'../page/user/create/create.vue'),
    edit: () => import(/* webpackChunkName: "user" */'../page/user/edit/edit.vue'),
    password: () => import(/* webpackChunkName: "user" */'../page/user/password/password.vue'),
  },
  role: () => import(/* webpackChunkName: "role" */ '../page/role/role.vue'),
  src: () => import(/* webpackChunkName: "role" */ '../page/src/src.vue'),
}

const routes = [
  {
    name: '首页',
    path: '/',
    component: wrap,
    children: [
      { name: '登录', path: 'login', component: config.login, meta: { escapeAuth: true } },
      {
        name: '用户管理',
        path: 'user',
        component: wrap,
        children: [
          { name: '创建', path: 'create', component: config.user.create },
          { name: '编辑', path: 'edit', component: config.user.edit },
          { name: '密码重置', path: 'password', component: config.user.password },
          { path: '', component: config.user.user },
        ]
      },
      { name: '角色管理', path: 'role', component: config.role },
      { name: '资源管理', path: 'src', component: config.src },
      { name: '仪表盘', path: 'dashboard', component: config.dashboard },
      { path: '', redirect: '/user' },
      { name: '找不到页面', path: '*', component: pageNotFound }
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
