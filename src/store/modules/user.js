import defaultAvatar from "@/assets/images/photo.jpg";

const user = {
  state: {
    token: "",
    id: "",
    name: "",
    avatar: defaultAvatar,
    roles: [],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ID: (state, id) => {
      state.id = id;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
  },

  actions: {},
};

export default user;
