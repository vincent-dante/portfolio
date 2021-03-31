<template>
  <div class="graphics-item-container">
    <div class="project-g-column">
      <img src="../assets/graphics-design/gp-1.jpg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-2.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-3.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-4.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-5.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-6.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-7.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-8.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-9.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-10.jpeg" alt="" srcset="">
    </div>
    <div class="project-g-column">
      <img src="../assets/graphics-design/gp-11.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-12.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-13.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-14.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-15.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-16.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-17.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-18.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-19.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-20.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-21.jpeg" alt="" srcset="">
    </div>
    <div class="project-g-column">
      <img src="../assets/graphics-design/gp-22.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-23.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-24.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-25.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-26.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-27.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-28.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-29.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-30.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-31.jpeg" alt="" srcset="">
      <img src="../assets/graphics-design/gp-32.jpeg" alt="" srcset="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsGraphicDesign'
}
</script>

<style lang="scss" scoped>
.graphics-item-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .project-g-column {
    width: 100%;

    img {
      padding: 10px;
      width: 100%;
    }
  }
}

@media only screen and (min-width: 992px) {
  .graphics-item-container {
    .project-g-column {
      width: 33%;
    }
  }
}
</style>