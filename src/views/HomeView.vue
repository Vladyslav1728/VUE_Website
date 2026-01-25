<template>
  <div id="home" class="home">

    <h1 class="home-title">Explore Eastern & Central Europe</h1>
    <p class="home-intro">
      Welcome to our travel guide! On this website, you can explore some of the most beautiful countries of Eastern and Central Europe.
      Discover their rich history, culture, landscapes, and top attractions. Click on any country below to learn more about its landmarks, cuisine, traditions, and top experiences.
    </p>

    <div class="destinations">
      <div v-for="d in destinations"
           :key="d.slug"
           class="destination-card">

        <RouterLink :to="`/destination/${d.slug}`">
          <img :src="`/VUE_Website/images/${d.image}`" :alt="d.name" />
        </RouterLink>

        <h2>{{ d.name }}</h2>

        <p class="destination-description">{{ d.description.slice(0, 120) }}...</p>
      </div>
    </div>

  </div>
</template>



<script>
import { useDestinationsStore } from "@/stores/useDestinationsStore";
export default {
  name: "HomeView",
  computed: {
    destinations() {
      const store = useDestinationsStore()
      return store.destinations
    }
  }
}
</script>



<style scoped>
.home img {
  max-width: 230px;
  border-radius: 8px;
  border: 2px solid #a8d5ba;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.home .destinations {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.home-title {
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #2f4f4f;
}
.home-intro {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 40px auto;
  text-align: center;
  color: #3f5f55;
}
.destinations {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
.destination-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(76, 175, 122, 0.2),
  0 6px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  text-align: center;
  width: 220px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.destination-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(76, 175, 122, 0.35),
  0 10px 20px rgba(0, 0, 0, 0.08);
}
.destination-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 2px solid #a8d5ba;
}
.destination-card h2 {
  margin: 12px 0 8px;
  color: #2f4f4f;
}
.destination-description {
  font-size: 0.95rem;
  color: #3f5f55;
  padding: 0 12px 12px;
  line-height: 1.5;
}
.home-title {
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #2f4f4f;
}
.home-intro {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 40px auto;
  text-align: center;
  color: #3f5f55;
}
</style>