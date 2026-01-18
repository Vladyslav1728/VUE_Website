<template>
  <div class="experience-card">
    <RouterLink :to="`/destination/${slug}/${experience.slug}`" @click.native="scrollDownToText">

      <img :src="`/VUE_Website/images/${experience.image}`" :alt="experience.name"/>
      <div class="card-text">
        <h3>{{ experience.name }}</h3>
        <p>{{ experience.description.slice(0, 120) }}...</p>
      </div>

    </RouterLink>
  </div>
</template>



<script>
export default {
  name: "ExperienceCard",
  props: {
    slug: { type: String, required: true },
    experience: { type: Object, required: true }
  },
  methods: {
    scrollDownToText() {
      setTimeout(() => {
        const textBlock = document.querySelector(".experience-title");
        if (textBlock) {
          textBlock.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }
}
</script>



<style scoped>
.experience-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  width: 220px;
  box-shadow: 0 12px 30px rgba(76, 175, 122, 0.2),
  0 6px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}
.experience-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(76, 175, 122, 0.35),
  0 10px 20px rgba(0, 0, 0, 0.08);
}
.experience-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
  border-bottom: 2px solid #a8d5ba;
  border-radius: 16px 16px 0 0;
}
.card-text {
  background: #ffffff;
  padding: 12px;
  text-align: center;
}
.card-text h3 {
  margin: 0 0 5px 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #3f5f55;
  padding: 0 12px 12px;
  line-height: 1.5;
}
.card-text p {
  font-weight: 500;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.3;
  color: #3f5f55;
}
</style>