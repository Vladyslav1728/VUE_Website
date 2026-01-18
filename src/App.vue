<template>
  <header>
    <TheNavigation />
  </header>

  <main class="container">
    <RouterView />
  </main>

  <footer class="footer">
    <TheFooter />
  </footer>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue"
import TheFooter from "@/components/TheFooter.vue"
export default {
  name: "App",
  components: {
    TheNavigation,
    TheFooter
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  margin-top: 80px;
  background: linear-gradient(135deg, #077c22, #58ca89);
  box-shadow: 0 -8px 25px rgba(76, 175, 122, 0.25);
}
</style>