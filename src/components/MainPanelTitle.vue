<template>
  <div class="main-panel-title-box">
    <book-mark theme="outline" size="24" fill="#333" />
    <div class="main-panel-title-text">用户信息</div>
  </div>
</template>

<script>
export default {
  name: "PanelTitle",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.main-panel-title-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  background-color: #eaeaea;
  padding: 0 20px;
}
.main-panel-title-text {
  margin-left: 12px;
  font-size: 16px;
  color: $bold_text;
}
</style>
