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
import { useDestinationsStore } from "@/stores/useDestinationsStore.js"
import TheNavigation from "@/components/TheNavigation.vue"
import TheFooter from "@/components/TheFooter.vue"

export default {
  name: "App",
  components: {
    TheNavigation,
    TheFooter
  },
  mounted() {
    const store = useDestinationsStore()
    store.loadDestinations()
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  margin-top: 80px;
  background: linear-gradient(135deg, #d6ffe1, #ffffff);
  box-shadow: 0 -8px 25px rgba(76, 175, 122, 0.25);
}
</style>