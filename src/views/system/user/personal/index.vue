<template>
  <div class="panel-container">
    <CardPanel style="width: 400px">
      <template v-slot:header>
        <div class="card-header-box">
          <i class="card-header-icon el-icon-collection-tag"></i>
          <div class="card-header-text">个人信息</div>
        </div>
      </template>
      <div class="user-info">
        <userAvatar />
        <div class="list-group">
          <div class="list-group-item">
            用户名称
            <div class="pull-right">{{ user.userName }}</div>
          </div>
          <div class="list-group-item">
            手机号码
            <div class="pull-right">{{ user.phonenumber }}</div>
          </div>
          <div class="list-group-item">
            用户邮箱
            <div class="pull-right">{{ user.email }}</div>
          </div>
          <div class="list-group-item">
            创建日期
            <div class="pull-right">{{ user.createTime }}</div>
          </div>
        </div>
      </div>
      <template v-slot:footer> </template>
    </CardPanel>
  </div>
</template>

<script>
import UserAvatar from "./userAvatar.vue";
import CardPanel from "@/components/CardPanel.vue";
export default {
  name: "",
  components: { CardPanel, UserAvatar },
  data() {
    return {
      user: {
        userName: "liwen",
        phonenumber: "13034019662",
        email: "2358619755@qq.com",
        createTime: "2025-02-26",
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.list-group {
  width: 100%;
}

.list-group-item {
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  border-bottom: 1px solid #e7eaec;
  border-top: 1px solid #e7eaec;
  margin-bottom: -1px;
  padding: 11px 0px;
  font-size: $default_font_size;
}

.pull-right {
  float: right;
}
</style>
