<template>
  <div class="panel-container">
    <splitpanes>
      <pane :size="15" min-size="5">
        <div
          style="
            height: 100%;
            box-sizing: border-box;
            padding: 0 6px;
            overflow: auto;
          "
        >
          <SelectTree></SelectTree>
        </div>
      </pane>
      <pane :size="85" min-size="60">
        <div style="box-sizing: border-box; padding: 0 6px">
          <ConditionPanel
            :filterList="curFilterList"
            @queryfilterFunc="queryfilterResultFunc"
          ></ConditionPanel>
          <BaseTable
            :height="tableHeight"
            :columns="columnList"
            :tableData="tableList"
          ></BaseTable>
        </div>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import CardPanel from "@/components/CardPanel.vue";
import ConditionPanel from "@/components/ConditionPanel.vue";
import SelectTree from "@/components/treeModule/SelectTree.vue";
import BaseTable from "@/components/tableModule/BaseTable.vue";

import { curFilterList, columnList, tableList } from "@/api/tableData.js";
export default {
  name: "",
  components: { CardPanel, ConditionPanel, SelectTree, BaseTable },
  data() {
    return {
      tableHeight: 200,
      curFilterList: [
        {
          label: "姓名",
          code: "name",
          value: "",
          placeholder: "请输入姓名",
        },
        {
          label: "年龄",
          code: "age",
          value: "",
          placeholder: "请输入年龄",
        },
        {
          label: "邮箱",
          code: "email",
          value: "",
          placeholder: "请输入邮箱",
        },
      ],
      columnList: [
        {
          code: "user_id",
          label: "用户编号",
          sort: 0,
        },
        {
          code: "user_name",
          label: "用户名称",
          sort: 0,
        },
        {
          code: "nick_name",
          label: "昵称",
          sort: 0,
        },
        {
          code: "create_time",
          label: "创建日期",
          sort: 1,
        },
      ],
      tableList: [
        {
          user_id: "001",
          user_name: "李稳",
          nick_name: "liwen",
          create_time: "2025-02-27",
          status: "正常",
        },
        {
          user_id: "002",
          user_name: "赵梦",
          nick_name: "zhaomeng",
          create_time: "2025-02-26",
          status: "正常",
        },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    queryfilterResultFunc(filterResult) {},
  },
};
</script>

<style lang="scss" scoped>
.panel-container {
  height: 100%;
  background-color: #ffffff;
}
</style>
