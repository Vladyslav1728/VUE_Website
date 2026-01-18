<template>
  <div class = "experience-details" v-if = "experience">

    <h2>{{ experience.name }}</h2>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>

  </div>
</template>



<script>
import data from "@/data.json"
export default {
  name: "ExperienceView",
  props: ["slug", "experienceSlug"],
  data() {
    return {
      experience: null
    }
  },
  mounted() {
    this.loadExperience()
  },
  watch: {
    slug() {
      this.loadExperience()
    },
    experienceSlug() {
      this.loadExperience()
    }
  },
  methods: {
    loadExperience() {
      const destination = data.destinations.find(d => d.slug === this.slug)
      if (!destination) return
      this.experience = destination.experiences.find(e => e.slug === this.experienceSlug)
      console.log("FOUND EXPERIENCE:", this.experience)
    }
  }
}
</script>



<style scoped>
.experience-details {
  margin: 60px auto;
  padding: 24px 26px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow:
      0 18px 40px rgba(76, 175, 122, 0.25),
      0 6px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.experience-details:hover {
  transform: translateY(-4px);
  box-shadow:
      0 24px 55px rgba(76, 175, 122, 0.35),
      0 10px 18px rgba(0, 0, 0, 0.08);
}
.experience-details img {
  float: left;
  margin: 8px 24px 12px 0;
  width: 300px;
  height: auto;
  border-radius: 14px;
}
.experience-details h2 {
  margin: 0 0 12px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #2f4f4f;
}

.experience-details p {
  margin: 0;
  line-height: 1.75;
  font-size: 15px;
  color: #3f5f55;
}
</style>