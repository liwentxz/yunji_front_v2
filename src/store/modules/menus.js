import menuData from "@/api/menuData";
import { changeListToTree } from "@/utils/convert.js";

const state = {
  menuList: [],
};

const mutations = {
  GET_MENU_LIST: (state, list) => {
    state.menuList = list;
  },
};

const actions = {
  getMenuListAsync({ commit }) {
    setTimeout(() => {
      let params = {
        idKey: "menuId",
        parentIdKey: "parentId",
        childrenKey: "children",
      };
      const menuTree = changeListToTree(menuData, params);
      commit("GET_MENU_LIST", menuTree);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
