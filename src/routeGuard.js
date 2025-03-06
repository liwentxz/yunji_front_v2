import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !sessionStorage.getItem("token")) {
    next("/login"); // 跳转登录页
  } else {
    store.dispatch("menus/getMenuListAsync");
    next(); // 放行
  }
});

// router.afterEach(() => {});
