<template>
  <div>
    <div class="search-box">
      <el-input placeholder="请输入内容" size="small" v-model="input">
      </el-input>
      <el-button
        class="search-btn"
        size="small"
        icon="el-icon-search"
      ></el-button>
    </div>
    <el-tree
      :data="treeData"
      :props="defaultProps"
      show-checkbox
      @check-change="handleCheckChange"
      @node-click="handleNodeClick"
    >
    </el-tree>
  </div>
</template>

<script>
import treeList from "@/api/treeData";
import { changeListToTree } from "@/utils/convert.js";
export default {
  name: "SelectTree",
  data() {
    return {
      input: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
      treeData: [],
    };
  },
  mounted() {
    let params = {
      idKey: "id",
      parentIdKey: "parentId",
      childrenKey: "children",
    };
    this.treeData = changeListToTree(treeList, params);
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>
<style lang="scss" scoped>
.search-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.search-btn {
  font-size: $default-font-size;
}
</style>
