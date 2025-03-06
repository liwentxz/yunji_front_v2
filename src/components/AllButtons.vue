<template>
  <div>
    <el-button class="btn" type="primary" size="mini" @click="queryFunc()"
      >查询</el-button
    >
    <el-button class="btn" size="mini" @click="resetForm()">重置</el-button>
    <el-button class="btn" size="mini">设置</el-button>
  </div>
</template>

<script>
import { resetForm } from "../utils/form";

export default {
  name: "AllButtons",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    resetForm() {
      this.$emit("resetForm");
    },
    queryFunc() {
      this.$emit("queryFunc");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  font-size: $default_font_size;
}
</style>
