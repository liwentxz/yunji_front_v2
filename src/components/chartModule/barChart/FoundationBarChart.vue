<template>
  <div ref="chart" :style="{ width: chartWidth, height: chartHeight }"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "FoundationBarChart",
  components: {},
  props: {
    chartWidth: {
      type: String,
    },
    chartHeight: {
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chartDom = this.$refs.chart;
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        grid: [
          {
            left: 30,
            top: 30,
            right: 30,
            bottom: 30,
          },
        ],
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style></style>
