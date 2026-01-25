<template>
  <nav id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink
        v-for="d in destinations"
        :key="d.id"
        :to="`/destination/${d.slug}`">

      {{ d.name }}
    </RouterLink>
  </nav>
</template>



<script>
import { useDestinationsStore } from "@/stores/useDestinationsStore.ts";

export default {
  name: "TheNavigation",
  setup() {
    const store = useDestinationsStore()
    return { destinations: store.destinations }
  }
}
</script>



<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 26px 32px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #d6ffe1, #ffffff);
  color: white;
  z-index: 10;
  box-shadow: 0 8px 25px rgba(76, 175, 122, 0.35);
  transition: background 0.4s ease, box-shadow 0.4s ease;
}
#nav a {
  margin-right: 22px;
  color: #254a2b;
  opacity: 0.85;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 13px;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
#nav a:hover {
  opacity: 1;
  transform: translateY(-1px);
}
#nav a.router-link-active {
  opacity: 1;
  position: relative;
}
#nav a.router-link-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: rgb(37, 74, 43);
  border-radius: 2px;
}
</style>