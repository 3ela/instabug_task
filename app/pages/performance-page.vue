<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      {{ " Start Date : " }}
      {{ filterData.startDate }}
      <input 
        class="date-input"
        type="date" 
        id="start" 
        name="filter-start"
        v-model='startDate'
        @change='filterData'
      >
      {{ " End Date : " }}
      <input 
        class="date-input"
        type="date" 
        id="end" 
        name="filter-end"
        v-model='endDate'
        @change='filterData'
      >
      <!-- <emplyees-table-filter /> -->
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component 
        v-if='!loading'
        :chartData='filteredPerformanceData'
      />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import { mapGetters, mapActions } from 'vuex';
import * as helpers from '../helpers';

export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },
  data() {
    return {
      startDate: null,
      endDate: null,
      filteredPerformanceData: [],
      loading: false,
    }
  },
  mounted() {
    this.loading = true;
    this.getPerformanceData()
      .then(res => {
        this.filterData();
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
      })
  },
  methods: {
    ...mapActions(['getPerformanceData']),
    filterData() {
      this.filteredPerformanceData = helpers.dateFilter(this.startDate, this.endDate, this.performanceData);
    },
  },
  computed: {
    ...mapGetters(['performanceData']),
  }
};
</script>
