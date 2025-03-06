<template>
  <div class="main-panel-header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainPanelHeader",
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
.main-panel-header {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
