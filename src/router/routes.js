import wrap from '../component/wrap.vue'
import pageNotFound from '../page/pageNotFound.vue'

const config = {
  login: () => import('../page/auth/login.vue'),
  dashboard: () => import('../page/dashboard.vue'),

  setting: () => import('../page/setting/setting.vue'),
  nest: {
    nest: () => import(/* webpackChunkName: "nest" */ '../page/nest/nest/nest.vue'),
    nestDetail: () => import(/* webpackChunkName: "nest" */'../page/nest/nestDetail/nestDetail.vue'),
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
        path: 'nest',
        component: wrap,
        children: [
          { name: '嵌套详情', path: 'detail', component: config.nest.nestDetail },
          { path: '', component: config.nest.nest }
        ]
      },
      { name: '仪表盘', path: 'dashboard', component: config.dashboard },
      { path: '', redirect: 'dashboard' },
      { name: '找不到页面', path: '*', component: config.pageNotFound }
    ]
  }
];

export default routes;
