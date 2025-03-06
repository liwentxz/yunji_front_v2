const getters = {
  sidebar: (state) => state.app.sidebar,
  tagList: (state) => state.tags.tagList,
  menuList: (state) => state.menus.menuList,
  avatar: (state) => state.user.avatar,
};
export default getters;
