<template>
  <div class="panel-container">
    <div style="display: flex; flex-direction: column">
      <CardPanel style="width: 500px">
        <template v-slot:header>
          <div class="card-header-box">
            <i class="card-header-icon el-icon-collection-tag"></i>
            <div class="card-header-text">用户分析</div>
          </div>
        </template>
        <div>
          <FoundationBarChart
            :chartWidth="'100%'"
            :chartHeight="'300px'"
          ></FoundationBarChart>
        </div>
        <template v-slot:footer> </template>
      </CardPanel>
      <CardPanel style="width: 800px">
        <template v-slot:header>
          <div class="card-header-box">
            <i class="card-header-icon el-icon-collection-tag"></i>
            <div class="card-header-text">订单统计</div>
          </div>
        </template>
        <div>
          <StackLineChart
            :chartWidth="'100%'"
            :chartHeight="'300px'"
          ></StackLineChart>
        </div>
        <template v-slot:footer> </template>
      </CardPanel>
    </div>
  </div>
</template>

<script>
import FoundationBarChart from "@/components/chartModule/barChart/FoundationBarChart.vue";
import StackLineChart from "@/components/chartModule/lineChart/StackLineChart.vue";
import CardPanel from "@/components/CardPanel.vue";
export default {
  name: "",
  components: { FoundationBarChart, StackLineChart, CardPanel },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
