<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="left-container border-end">
          <div class="thumbnail-container">
            <img src="./assets/pfpics.jpeg" alt="" srcset="" class="rounded-circle shadow">
          </div>
          <h1 class="title-name">Vincent Dante</h1>
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
        <!-- add transition here - ongoing -->
        <router-view/>
      </div>
    </div>
  </div>


  
</template>

<style lang="scss">
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

  .title-name {
    font-size: 24px;
    font-family: 'Nothing You Could Do', cursive;
    padding-top: 30px;
    margin: 0;
  }

  .link-container {
    display: grid;
    justify-content: center;
    padding: 50px 0;

    a {
      text-decoration: none;
      text-align: left;
      display: block;
      font-size: 16px;
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

.left-container::after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  right: -8px;
  background: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 50%;
}
</style>
