<template>
  <div class="notfound-page">
    <div class="notfound-content">
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
      <p>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <router-link class="btn-home" to="/">Go Home</router-link>
    </div>
  </div>
</template>



<script>
  export default {
    name: "NotFound"
  }
</script>



<style scoped>
.notfound-page {
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  box-sizing: border-box;
}
.notfound-content {
  text-align: center;
  max-width: 600px;
}
.notfound-content h1 {
  font-size: 6rem;
  margin: 0;
  color: #077c22;
}
.notfound-content h2 {
  font-size: 2rem;
  margin: 20px 0;
  color: #2f4f4f;
}
.notfound-content p {
  font-size: 1.1rem;
  color: #3f5f55;
  margin-bottom: 30px;
  line-height: 1.6;
}
.btn-home {
  display: inline-block;
  padding: 14px 28px;
  background: linear-gradient(135deg, #077c22, #58ca89);
  color: #fff;
  font-weight: 600;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-home:hover {
  background: linear-gradient(135deg, #119730, #6fdc9d);
  transform: translateY(-2px);
}
</style>