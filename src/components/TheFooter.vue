<template>
  <div class="footer-content">
    © {{ year }} • Shcherbyna Vladyslav • Frontend Technologies Project
  </div>
</template>



<script>
export default {
  name: "TheFooter",
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>



<style scoped>
.footer-content {
  text-align: center;
  padding: 34px 20px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #ffffff;
  opacity: 0.95;
}
</style>