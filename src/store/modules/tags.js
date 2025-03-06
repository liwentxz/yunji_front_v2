const state = {
  tagList: [],
};

const mutations = {
  ADD_TAG_LIST: (state, item) => {
    if (state.tagList.some((v) => v.path === item.path)) return;
    state.tagList.push(
      Object.assign({}, item, {
        name: item.menuName,
      })
    );
  },
  DEL_TAG_LIST: (state, item) => {
    for (const [i, v] of state.tagList.entries()) {
      if (v.path === item.path) {
        state.tagList.splice(i, 1);
        break;
      }
    }
  },
  DEL_OTHERS_TAG_LIST: (state, item) => {
    state.tagList = state.tagList.filter((v) => {
      return v.name === "首页" || v.path === item.path;
    });
  },
  DEL_ALL_TAG_LIST: (state) => {
    const list = state.tagList.filter((v) => v.name == "首页");
    state.tagList = list;
  },

  DEL_RIGHT_TAG_LIST: (state, item) => {
    const index = state.tagList.findIndex((v) => v.path === item.path);
    if (index === -1) {
      return;
    }
    state.tagList = state.tagList.filter((item, idx) => {
      if (idx <= index || (item.meta && item.meta.affix)) {
        return true;
      }
      return false;
    });
  },
  DEL_LEFT_TAG_LIST: (state, item) => {
    const index = state.tagList.findIndex((v) => v.path === item.path);
    if (index === -1) {
      return;
    }
    state.tagList = state.tagList.filter((item, idx) => {
      if (idx >= index || (item.meta && item.meta.affix)) {
        return true;
      }
      return false;
    });
  },
};

const actions = {
  addTagList({ commit }, item) {
    commit("ADD_TAG_LIST", item);
  },
  delTagList({ commit }, item) {
    commit("DEL_TAG_LIST", item);
  },
  delOthersTagList({ commit }, item) {
    commit("DEL_OTHERS_TAG_LIST", item);
  },
  delAllTagList({ commit }) {
    commit("DEL_ALL_TAG_LIST");
  },
  delRightTagList({ commit }, item) {
    commit("DEL_RIGHT_TAG_LIST", item);
  },
  delLeftTagList({ commit }, item) {
    commit("DEL_LEFT_TAG_LIST", item);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
