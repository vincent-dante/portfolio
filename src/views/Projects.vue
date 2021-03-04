<template>
  <div class="right-container">
    <div class="page-title-container border-bottom">
      <h1 class="page-title">Projects</h1>
    </div>

    <a href="#">Web Design</a> /
    <a href="#">Graphic Design</a>
    
    <div class="project-container-item">
      <div class="project-item">

      </div>
      <div class="project-item">

      </div>
      <div class="project-item">

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
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}

.project-item {
  height: 200px;
  width: 200px;
  background-color: red;
}
</style>