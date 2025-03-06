import { Bookmark, MoreApp } from "@icon-park/vue";

export default {
  install(Vue) {
    Vue.component("more-app", MoreApp);
    Vue.component("book-mark", Bookmark);
  },
};
