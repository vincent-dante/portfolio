<template>
  <div class="right-container">
    <div class="page-title-container border-bottom">
      <h1 class="page-title">Home</h1>
    </div>
    
    <div class="animate__animated animate__fadeInUp">
      <p>
        <span class="welcome-msg">Hi there welcome to my portfolio!</span>
      </p>

      <p>
        I'm a web developer and designer with a degree of Bachelor of Science in Information Technology.
        I always love to create and learn awesome stuff.
      </p>
    </div>

    
    <br><br><br>

    <h2 class="sub-heading">Technology</h2>

    <div class="animate__animated animate__bounceInUp">
      <i class="fab fa-3x fa-js programming-icon a1"></i>
      <i class="fab fa-3x fa-node-js programming-icon a2"></i>
      <i class="fab fa-3x fa-vuejs programming-icon a3"></i>
      <i class="fab fa-3x fa-html5 programming-icon a4"></i>
      <i class="fab fa-3x fa-css3 programming-icon a5"></i>
      <i class="fab fa-3x fa-laravel programming-icon a6"></i>
      <i class="fab fa-3x fa-php programming-icon a7"></i>
    </div>


    
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.programming-icon-container {
  height: 200px;
}
</style>