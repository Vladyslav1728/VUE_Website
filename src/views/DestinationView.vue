<template>
  <div v-if="destination">
    <button class="go-back" @click="goBack"> ← Go back </button>
    <h1>{{ destination.name }}</h1>

    <div class="destination-details">
      <p class="text-main">{{ destination.description }}</p>
      <img :src="`/VUE_Website/images/${destination.image}`" :alt="destination.name" />
    </div>

    <div class="destination-facts">
      <div class="facts-text">
        <p class="text-secondary">{{ destination.facts }}</p>
      </div>
      <div class="facts-table">
        <Table :data="destination.factsTable" />
      </div>
    </div>


    <div class="experiences">
      <h2>Top 5 cities in {{ destination.name }}</h2>
      <div class="cards">
        <ExperienceCard v-for="exp in destination.experiences"
                        :key="exp.slug"
                        :slug="destination.slug"
                        :experience="exp"/>
      </div>
    </div>

    <RouterView />
  </div>
</template>



<script>
import ExperienceCard from "@/components/ExperienceCard.vue";
import TheFooter from "@/components/TheFooter.vue";
import Table from "@/components/Table.vue";
import { useDestinationsStore } from "@/stores/useDestinationsStore";

export default {
  name: "DestinationView",
  props: ["slug"],
  components: {TheFooter, ExperienceCard, Table},
  computed: {
    destination() {
      const store = useDestinationsStore()
      return store.destinations.find(
          d => d.slug === this.slug
      ) || null
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>



<style scoped>
.destination-details {
  display: flex;
  gap: 100px;
  align-items: center;
  margin-bottom: 60px;
  line-height: 1.5;
}
.destination-facts {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  max-width: 1050px;
  margin: 60px auto;
  padding: 32px;
  background: #eaf6ec;
  border-radius: 16px;
  box-shadow: 0 18px 40px rgba(76, 175, 122, 0.25),
  0 6px 12px rgba(0, 0, 0, 0.05);
  white-space: pre-line;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.facts-text {
  flex: 1 1 60%;
  color: #2f4f4f;
  font-size: 1.05rem;
  line-height: 1.6;
  min-width: 200px;
}
.facts-table {
  flex: 1 1 40%;
  display: flex;
  justify-content: flex-end;
}
.destination-facts:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 55px rgba(76, 175, 122, 0.35), 0 10px 18px rgba(0, 0, 0, 0.08);
}
.destination-details img {
  border-radius: 8px;
  border: 3px solid #cce9d3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 45%;
  height: auto;
  display: block;
}
.go-back {
  position: fixed;
  top: 15%;
  right: 30px;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #077c22, #58ca89);
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 14px 22px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 10px 25px rgba(76, 175, 122, 0.35);
  transition: all 0.25s ease;
}
.go-back:hover {
  transform: translateY(-50%) translateX(-5px);
  box-shadow: 0 14px 35px rgba(76, 175, 122, 0.5);
  background: linear-gradient(135deg, #119730, #6fdc9d);
}
.go-back:active {
  transform: translateY(-50%) scale(0.96);
}
.experiences {
  padding: 40px 0;
}
.experiences h2 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #2f4f4f;
  margin-bottom: 30px;
}
.experiences .cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}
</style>