<template>
  <div class = "experience-details" v-if = "experience">

    <h2 class="experience-title">{{ experience.name }}</h2>

    <div class="experience-main">
      <img :src="`/VUE_Website/images/${experience.image}`" :alt="experience.name" class="experience-image" />
      <p class="experience-description">{{ experience.description }}</p>
    </div>

    <div class="population-section" v-if="experience.population">
      <h2 class="population-title">Population graph for this city</h2>
      <PopulationChart :data="experience.population" />
    </div>
  </div>
</template>



<script lang="ts">
import { useDestinationsStore } from "@/stores/useDestinationsStore.ts";
import PopulationChart from "@/components/PopulationChart.vue";
import type { Destination, Experience } from "@/types/data.ts";

export default {
  name: "ExperienceView",
  components: { PopulationChart },
  props: {
    slug: { type: String, required: true },
    experienceSlug: { type: String, required: true }
  },
  computed: {
    experience(): Experience | null {
      const store = useDestinationsStore()
      const destination: Destination | undefined = store.destinations.find(d => d.slug === this.slug);
      if (!destination) return null;

      return destination.experiences.find(e => e.slug === this.experienceSlug) || null;
    }
  },
  mounted() {
    this.scrollToText();
  },
  methods: {
    scrollToText() {
      this.$nextTick(() => {
        if (this.$refs.textBlock) {
          this.$refs.textBlock.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }
}
</script>



<style scoped>
.experience-details {
  margin: 60px auto;
  padding: 24px 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 18px 40px rgba(76, 175, 122, 0.25), 0 6px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  max-width: 1200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.experience-details:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 55px rgba(76, 175, 122, 0.35), 0 10px 18px rgba(0, 0, 0, 0.08);
}
.experience-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #2f4f4f;
  text-align: center;
  margin-bottom: 24px;
}
.experience-main {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}
.experience-image {
  margin-top: 20px;
  width: 500px;
  border-radius: 14px;
  flex-shrink: 0;
}
.experience-description {
  max-width: 500px;
  font-size: 15px;
  line-height: 1.75;
  color: #3f5f55;
  text-align: justify;
}
.population-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.population-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #2f4f4f;
  margin-bottom: 20px;
  text-align: center;
}
</style>