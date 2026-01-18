<template>
  <div class="chart-wrapper">
    <canvas ref="canvas"></canvas>
  </div>
</template>



<script>
import { onMounted, ref, watch } from "vue";
import Chart from "chart.js/auto";

export default {
  name: "PopulationChart",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const canvas = ref(null);
    let chartInstance = null;
    const renderChart = () => {
      const labels = Object.keys(props.data);
      const values = Object.values(props.data);
      if (chartInstance) chartInstance.destroy();
      chartInstance = new Chart(canvas.value, {
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
    };
    onMounted(renderChart);
    watch(() => props.data, renderChart, { deep: true });
    return { canvas };
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