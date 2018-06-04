import  http  from "./http";

const prefix = {
  common: "sys",
  auth: "/uaa",
  role: "/sys",
  src: "/sys",
}

const api = {
  common: {
    dictionary: param => http.get({url:'/staticdata/dic/group/' + param, data: param}), //获取系统列表
    adminsys: param => http.get({url: prefix.common + '/baseinfo/adminsys', data: param}), //获取系统列表
    sysrescource_tree: param => http.get({url: prefix.common + '/sysrescource/tree/' + param}), //权限资源-资源树结构结果
  },
  auth: {
    adminlogin: param => http.post({url: prefix.auth + '/adminlogin', data: param}), //登录
    signout: param => http.post({url: prefix.auth + '/signout', data: param}), //退出
  },
  role: { //角色
    sysrole: param => http.post({url: prefix.role + '/sysrole', data: param}), //添加
    sysroleDel: param => http.del({url: prefix.role + '/sysrole/' + param, data: param}), //删除
    page: param => http.post({url: prefix.role + '/sysrole/page', data: param}), //角色分页
  },
  src: { //资源
    sysrescource: param => http.post({url: prefix.src + '/sysrescource', data: param}), //添加
  },
}

export default api;
