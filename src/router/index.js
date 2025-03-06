import Vue from "vue";
import Router from "vue-router";
import login from "../views/login/index.vue";

import Layout from "@/layout";

Vue.use(Router);

export const constantRoutes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: login,
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/error/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error/401"),
    hidden: true,
  },
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/portal/index"),
        name: "Portal",
        meta: { title: "首页", requiresAuth: true },
      },
      {
        path: "front/materials/steel",
        name: "Steel",
        component: () => import("@/views/front/materials/steel/index"),
        meta: { title: "钢材" },
      },
      {
        path: "front/product/furniture",
        name: "Furniture",
        component: () => import("@/views/front/product/furniture/index"),
        meta: { title: "家具" },
      },
      {
        path: "system/user/personal",
        name: "Personal",
        component: () => import("@/views/system/user/personal/index"),
        meta: { title: "个人中心" },
      },
      {
        path: "system/user/manage",
        name: "Manage",
        component: () => import("@/views/system/user/manage/index"),
        meta: { title: "人员管理" },
      },
    ],
  },
];

// 防止连续点击多次路由报错
let routerPush = Router.prototype.push;
let routerReplace = Router.prototype.replace;
// push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
// replace
Router.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch((err) => err);
};

export default new Router({
  mode: "history", // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});
