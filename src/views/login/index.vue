<template>
  <div class="loginPage">
    <div class="comName">云际科技</div>
    <div>
      <div style="width: 300px; height: 400px">
        <el-form
          :model="loginForm"
          :rules="fieldRules"
          ref="loginForm"
          label-position="right"
          class="login-container"
        >
          <el-form-item prop="username">
            <el-input
              style="width: 80%"
              type="text"
              prefix-icon="el-icon-user"
              v-model="loginForm.username"
              @keyup.enter="login"
              auto-complete="off"
              placeholder="请输入用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              style="width: 80%"
              type="password"
              prefix-icon="el-icon-lock"
              @keyup.enter="login"
              v-model="loginForm.password"
              auto-complete="off"
              placeholder="密码"
            >
            </el-input>
          </el-form-item>
          <el-button type="primary" class="loginBtn" @click="login"
            >登录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      items: [],

      loginForm: {
        username: "",
        password: "",
      },
      fieldRules: {},
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    login() {
      var param = {
        uname: this.loginForm.username,
        pwd: this.loginForm.password,
      };
      // this.$http.post("/api/login", param).then((res) => {
      sessionStorage.setItem("token", "liwen");
      sessionStorage.setItem("sidebarStatus", 1);
      this.$router.push("/index");
      // });
    },
  },
};
</script>

<style scoped>
.loginPage {
  width: 100%;
  height: 98vh;
  background-image: linear-gradient(
    145deg,
    rgb(10, 198, 231) 0%,
    rgb(31, 235, 224) 50%,
    rgb(208, 255, 0) 100%
  );
}

.comName {
  position: absolute;
  width: 280px;
  height: 80px;
  color: #ffffff;
  font-size: 60px;
  font-weight: 1000;
  top: 200px;
  left: 220px;
}

.carousel-item-leave-to {
  opacity: 0;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
