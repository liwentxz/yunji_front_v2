import "vant/lib/index.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@/assets/styles/index.scss";
import "@/assets/styles/common.css";
import http from "@/utils/http/index.js";
import RelationGraph from "relation-graph";
import store from "./store";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import "./routeGuard";
import IconPark from "@/plugins/iconpark";
import { resetForm } from "@/utils/form.js";

Vue.use(IconPark);
Vue.use(ElementUI);
Vue.component("splitpanes", Splitpanes);
Vue.component("pane", Pane);

let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");

Vue.prototype.$echarts = echarts;
Vue.prototype.$http = http;
Vue.config.productionTip = false;

// 全局方法挂载
Vue.prototype.resetForm = resetForm;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
