<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },
  props: ['chartData'],
  data() {
    return {
    //   chartData: [
    //     {
    //       date_ms: 1641772800000,
    //       performance: 0.2,
    //     },
    //     {
    //       date_ms: 1641859200000,
    //       performance: 0.33,
    //     },
    //     {
    //       date_ms: 1641945600000,
    //       performance: 0.53,
    //     },
    //     {
    //       date_ms: 1642032000000,
    //       performance: 0.31,
    //     },
    //     {
    //       date_ms: 1642118400000,
    //       performance: 0.65,
    //     },
    //     {
    //       date_ms: 1642204800000,
    //       performance: 0.88,
    //     },
    //     {
    //       date_ms: 1642291200000,
    //       performance: 0.07,
    //     },
    //   ],
    };
  },

  computed: {
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          formatter: function (params) {
            return `
              <strong> ${params[0].axisValue} </strong>  <div> ${params[0].marker} Team Performance Index :  ${parseFloat(params[0].value).toFixed(0)} % </div>
            `
          },
          padding: [10, 20],
          backgroundColor: 'rgb(0,0,0)',
          textStyle: {
            color: '#fff'
          },
          extraCssText: 'text-align: center;'
        },
        visualMap: {
          type: 'piecewise',
          pieces: [
              // Range of a piece can be specified by property min and max,
              // where min will be set as -Infinity if ignored,
              // and max will be set as Infinity if ignored.
              {min: 80, max: 100, color: '#178B48'},
              {min: 50, max: 80, color: '#F8D530'},
              {min: 0, max: 50, color: '#EE5F48'},
          ],
          align: 'left',
          right: '0',
          top: '40'
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
      };
    },

    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>
