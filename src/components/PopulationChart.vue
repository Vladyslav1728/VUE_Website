<template>
  <div class="chart-wrapper">
    <canvas ref="canvas"></canvas>
  </div>
</template>



<script>
import Chart from "chart.js/auto";

export default {
  name: "PopulationChart",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chartInstance: null
    };
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    data: {
      handler() {
        this.renderChart();
      },
      deep: true
    }
  },
  methods: {
    renderChart() {
      const canvas = this.$refs.canvas;
      if (!canvas) return;
      const labels = Object.keys(this.data);
      const values = Object.values(this.data);
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
      this.chartInstance = new Chart(canvas, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Population",
              data: values,
              borderColor: "#4CAF7A",
              backgroundColor: "rgba(76, 175, 122, 0.2)",
              fill: true,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: false }
          }
        }
      });
    }
  }
};
</script>



<style scoped>
.chart-wrapper {
  max-width: 600px;
  margin: 0 auto;
  height: 350px;
}
.chart-wrapper canvas {
  width: 100% !important;
  max-width: 1000px;
  height: 300px !important;
}
</style>