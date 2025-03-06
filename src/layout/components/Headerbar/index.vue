<template>
  <div class="layout-top">
    <div class="lesseeTitleBox">
      <div class="titleText">云际科技</div>
    </div>
    <div class="tool-box">
      <el-dropdown @command="handleCommand">
        <span>
          <div class="userInfoBox">
            <el-image
              class="userAvatarBox"
              style="width: 40px; height: 40px"
              :src="avatar"
            ></el-image>
            <div class="userNameBox">李稳</div>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="person">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Headerbar",
  components: {},
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  computed: {
    ...mapGetters(["avatar"]),
  },
  methods: {
    handleCommand(command) {
      if (command == "person") {
        let menuObj = {
          menuName: "个人中心",
          path: "/system/user/personal",
        };
        this.$store.dispatch("tags/addTagList", menuObj);
        this.$router.push(menuObj.path);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.layout-top {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  border-bottom: 1px solid #cfcfcf;

  .lesseeTitleBox {
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    background-color: #eaeaea;

    .titleText {
      font-size: 26px;
    }
  }

  .tool-box {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;

    .userInfoBox {
      min-width: 100px;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }

    .userAvatarBox {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .userNameBox {
      margin: 0 10px;
      color: #000;
      font-size: $default_font_size;
    }
  }
}
</style>
