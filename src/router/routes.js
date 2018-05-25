import wrap from '../component/wrap.vue'
import pageNotFound from '../page/pageNotFound.vue'

const config = {
  login: () => import('../page/auth/login.vue'),
  dashboard: () => import('../page/dashboard.vue'),

  setting: () => import('../page/setting/setting.vue'),
  user: {
    user: () => import(/* webpackChunkName: "user" */ '../page/user/user/user.vue'),
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

export default routes;
