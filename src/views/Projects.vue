<template>
  <div class="right-container">
    <div class="page-title-container border-bottom">
      <h1 class="page-title">Projects</h1>
    </div>

    <div class="animate__animated animate__fadeInUp">
      <a href="#">Web Design</a> /
      <a href="#">Graphic Design</a>
      
      <br>
      <br>
      <div class="project-container-item">
        <div class="project-item">
          <img src="../assets/manga-online.jpg" alt="" srcset="">
        </div>
        <div class="project-item">
          <img src="../assets/antonios.jpg" alt="" srcset="">
        </div>
        <div class="project-item">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style lang="scss" scoped>
.project-container-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  width: 100%;
}

.project-item {
  height: 350px;
  background-color: #ddd;
  border-radius: 2px;

  img {
    width: 100%;
  }
}
</style>