<template>
  <div class="table-wrapper">
    <table class="info-table">
      <tbody>
      <tr v-for="(value, key) in data" :key="key">
        <th>{{ key }}</th>
        <td>{{ value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>



<script lang="ts">
  import type { FactsTable } from "@/types/data.ts"
  export default {
    name: "Table",
    props: {
      data: {
        // Vue ожидает функцию-конструктор
        type: Object as () => FactsTable,
        required: true
      }
    }
  }
</script>



<style scoped>
.table-wrapper {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
.info-table {
  width: 100%;
  max-width: 600px;
  min-width: 400px;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;

}
.info-table th, .info-table td {
  padding: 14px 18px;
  text-align: left;
}
.info-table th {
  background: #ffffff;
  color: #2f4f4f;
  font-weight: 700;
  width: 40%;
}
.info-table td {
  color: #3f5f55;
  font-size: 0.95rem;
}
.info-table tr:not(:last-child) {
  border-bottom: 1px solid #cce9d3;
}
</style>