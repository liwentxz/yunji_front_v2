<template>
  <div class="menuItemBox">
    <template v-if="menuItem.children.length == 0">
      <el-menu-item :index="menuItem.path" @click="menuItemSelected(menuItem)">
        <i :class="menuItem.icon"></i>
        <template slot="title">{{ menuItem.menuName }}</template>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="menuItem.path" popper-append-to-body>
      <template slot="title">
        <i :class="menuItem.icon"></i>
        <span v-if="!isCollapse"> {{ menuItem.menuName }}</span>
      </template>
      <menu-item
        v-for="child in menuItem.children"
        :key="child.path"
        :menu-item="child"
      />
    </el-submenu>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "MenuItem",
  components: {},
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mainTabsActiveName: "",
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  mounted() {
    if (this.menuItem.menuName == "首页") {
      this.$store.dispatch("tags/addTagList", this.menuItem);
    }
  },
  methods: {
    menuItemSelected(menu) {
      this.$store.dispatch("tags/addTagList", menu);
      this.mainTabsActiveName = menu.menuName;
      this.$router.push(menu.path);
    },
  },
};
</script>
<style lang="scss" scoped></style>
