<template>
  <div class="cardBox">
    <el-card>
      <slot name="header"></slot>
      <div class="cardContent">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CardPanel",
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
.cardBox :deep(.el-card__body) {
  padding: 0;
}
</style>
