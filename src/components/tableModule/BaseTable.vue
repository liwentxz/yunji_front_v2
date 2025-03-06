<template>
  <el-table
    :data="tableData"
    :style="{ width: width }"
    :height="height"
    size="medium"
    :highlight-current-row="false"
    header-row-class-name="table-header-class"
    header-cell-class-name="table-header-cell-class"
  >
    <el-table-column
      v-for="column in columns"
      :key="column.code"
      :prop="column.code"
      :label="column.label"
      width="180"
      :sortable="column.sort == 1 ? true : false"
      align="center"
    >
      <template slot-scope="scope">
        <span>{{ scope.row[column.code] }}</span>
      </template>
    </el-table-column>
  </el-table>

  <!-- <el-table-column prop="date">
    <template #header="scope">
      <div class="custom-header">
        <el-tooltip effect="dark" content="这是自定义提示" placement="top">
          <span>日期</span>
        </el-tooltip>
        <el-button @click="handleSort" size="mini" icon="el-icon-sort"></el-button>
      </div>
    </template>
  </el-table-column> -->

  <!-- 带排序按钮的列 -->
  <!-- <el-table-column prop="date" width="180">
    <template #header="{ column }">
      <div class="header-container">
        <span>{{ column.label }}</span>
        <div class="header-actions">
          <el-tooltip content="升序" placement="top">
            <i class="el-icon-sort-up" @click="sortDate('asc')"></i>
          </el-tooltip>
          <el-tooltip content="降序" placement="top">
            <i class="el-icon-sort-down" @click="sortDate('desc')"></i>
          </el-tooltip>
        </div>
      </div>
    </template>
  </el-table-column> -->

  <!-- 带自定义图标的列 -->
  <!-- <el-table-column prop="status">
    <template #header>
      <div class="status-header">
        <el-icon class="status-icon"><warning /></el-icon>
        <span>状态标识</span>
      </div>
    </template>
  </el-table-column> -->
</template>

<script>
export default {
  name: "BaseTable",
  components: {},
  props: {
    height: {
      type: Number,
    },
    width: {
      type: String,
    },
    columns: {
      type: Array,
    },
    tableData: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
::v-deep .table-header-class th {
  background-color: $table_header_background !important;
}
::v-deep .table-header-cell-class {
  padding: 5px 0;
  color: $bold_text;
}
</style>
