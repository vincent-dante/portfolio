<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="left-container border-end">
          <div class="thumbnail-container">
            <img src="../assets/pfpics.jpeg" alt="" srcset="" class="rounded-circle shadow">
          </div>
          <div class="link-container">
            <router-link to="/" class="a-link">Home</router-link>
            <router-link to="/" class="a-link">About</router-link>
            <router-link to="/" class="a-link">Education</router-link>
            <router-link to="/" class="a-link">Projects</router-link>
            <router-link to="/" class="a-link">Experience</router-link>
          </div>
          
          <div class="left-container-icon">
            <i class="fab fa-2x fa-github media-icon"></i>
            <i class="fab fa-2x fa-linkedin media-icon"></i>
            <i class="fab fa-2x fa-facebook media-icon"></i>
          </div>       
        </div>
      </div>
      <div class="col-lg-9">
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
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>

.left-container {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  padding-top: 50px;

  .thumbnail-container {
    height: 150px;

    img {
      height: 100%;
    }
  }


  .link-container {
    display: grid;
    justify-content: center;
    padding: 50px 0;

    a {
      text-decoration: none;
      text-align: left;
      display: block;
      font-size: 18px;
      color: #2c3e50;
      padding: 10px 0;
    }
  }

  .left-container-icon {

    .media-icon {
      padding: 10px;
      cursor: pointer;
    }
  }
}

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