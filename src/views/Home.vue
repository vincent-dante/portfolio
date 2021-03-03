<template>
  <div class="right-container">
    <div class="page-title-container border-bottom">
      <h1 class="page-title">Home</h1>
    </div>
    
    <p><span class="welcome-msg">Hi there welcome to my portfolio!</span></p>

    <p>
      I'm a web developer and designer with a degree of Bachelor of Science in Information Technology.
      I always love to create and learn awesome stuff.
    </p>
    


    <br><br><br><br><br><br><br>

    <h2 class="sub-heading">Technology</h2>

    <i class="fab fa-3x fa-js programming-icon"></i>
    <i class="fab fa-3x fa-node-js programming-icon"></i>
    <i class="fab fa-3x fa-vuejs programming-icon"></i>
    <i class="fab fa-3x fa-html5 programming-icon"></i>
    <i class="fab fa-3x fa-css3 programming-icon"></i>
    <i class="fab fa-3x fa-laravel programming-icon"></i>
    <i class="fab fa-3x fa-php programming-icon"></i>

    
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.right-container {
  padding-left: 20px;
  margin: 50px 0;
  text-align: left;

  .page-title-container {
    padding-bottom: 10px;
    margin-bottom: 30px;
  }

  .page-title, .sub-heading {
    font-size: 24px;
  }

  .welcome-msg {
    font-size: 20px;
  }

  .programming-icon {
    padding: 20px;
  }
}

</style>