<template>

  <nav class="navbar navbar-expand-lg navbar-dark navbar-background">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <img src="./assets/vincent.jpg" alt="" srcset="" class="rounded-circle shadow navbar-img">
        <h1 class="navbar-name">Vincent Dante</h1>
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-ul">
          <li class="nav-item">
            <router-link to="/" class="a-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="a-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects/" class="a-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/education" class="a-link">Education</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/experience" class="a-link">Experience</router-link>
          </li>
        </ul>
        <div class="sidebar-container-icon">
          <a href="https://github.com/vincent" target="_blank"><i class="fab fa-2x fa-github media-icon"></i></a>
          <a href="https://www.linkedin.com/in/vincent-dante-41358b143/" target="_blank"><i class="fab fa-2x fa-linkedin media-icon"></i></a>
          <a href="https://www.facebook.com/vincentwhiteangel.dante/" target="_blank"><i class="fab fa-2x fa-facebook media-icon"></i></a>
        </div>

      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="sidebar border-start border-end shadow-sm">
          <div class="thumbnail-container">
            <img src="./assets/vincent.jpg" alt="" srcset="" class="rounded-circle shadow">
          </div>
          <h1 class="title-name">Vincent Dante</h1>
          <div class="link-container">
            <router-link to="/" class="a-link">Home</router-link>
            <router-link to="/about" class="a-link">About</router-link>
            <router-link to="/projects/" class="a-link">Projects</router-link>
            <router-link to="/education" class="a-link">Education</router-link>
            <router-link to="/experience" class="a-link">Experience</router-link>
          </div>
          <div class="sidebar-container-icon">
            <a href="https://github.com/vincent-dante" target="_blank"><i class="fab fa-2x fa-github media-icon"></i></a>
            <a href="https://www.linkedin.com/in/vincent-dante-41358b143/" target="_blank"><i class="fab fa-2x fa-linkedin media-icon"></i></a>
            <a href="https://www.facebook.com/vincentwhiteangel.dante/" target="_blank"><i class="fab fa-2x fa-facebook media-icon"></i></a>
          </div>       
        </div>
      </div>
      <div class="col-lg-9">
        <div class="main">
          <router-view v-slot="{ Component }">
            <transition enter-active-class="animate__animated animate__fadeIn">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  body {
    background: #dddddd;
  }

  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #30475e;
  }

  .navbar-background {
    background: #222831;
    color: #c14343;

    .navbar-nav {
      padding: 10px 0;
    }

    .navbar-ul {
      display: grid;
      justify-content: center;
    }

    .navbar-img {
      width: 90px;
    }

    .navbar-name {
      font-family: 'Nothing You Could Do', cursive;
      font-size: 24px;
      margin: 20px 0;
    }

    .a-link {
      text-decoration: none;
      text-align: left;
      display: block;
      font-size: 16px;
      color: #c14343;
      padding: 10px 0 10px 10px;     
    }

    .a-link::after {
      display:block;
      content: '';
      border-bottom: 3px solid #f05454;  
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
      transform-origin:  0% 50%;
    }
    
    .a-link:hover::after {
      transform: scaleX(1); 
    }  

    .router-link-active {  
      transition: 0.3s;
      font-weight: bold;
      color: #f05454;
    }    

    .sidebar-container-icon {
      a {
        color: #c14343;
      }
      a:hover {
        color: #f05454;
      }

      .media-icon {
        padding: 10px;
        cursor: pointer;
      }
    }
  }

  .sidebar {
    display: none;
  }

  .main {
    position: relative;

    .content-container {
      text-align: left;
      padding-top: 50px;
      width: 100%;
      min-height: 800px;
      

      .page-title-container {
        padding-bottom: 10px;
        margin-bottom: 30px;
        overflow: hidden;
        border-bottom: 1px solid #30475e;
      }

      .page-title {
        font-size: 28px;
      }

      .welcome-msg, 
      .sub-heading 
      {
        font-size: 18px;
        font-weight: bold;
      }

      .programming-icon {
        padding: 20px;
      }
    }
  }  

  @media only screen and (min-width: 992px) {
    .navbar {
      display: none;
    }

    .sidebar {
      display: block;
      position: fixed;
      top: 0;
      padding-top: 50px;
      background: #222831;
      height: 100%;
      width: 222px;
      color: #f05454;

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
        padding: 30px 0;

        a {
          text-decoration: none;
          text-align: left;
          display: block;
          font-size: 16px;
          color: #c14343;
          padding: 10px 0;
        }

        a::after {
          display:block;
          content: '';
          border-bottom: 3px solid #f05454;  
          transform: scaleX(0);  
          transition: transform 250ms ease-in-out;
          transform-origin:  0% 50%;
        }
        a:hover::after {
          transform: scaleX(1); 
        }

        .router-link-active {  
          transition: 0.3s;
          font-weight: bold;
          color: #f05454;
        }
      }

      .sidebar-container-icon {
        a {
          color: #c14343;
        }
        a:hover {
          color: #f05454;
        }

        .media-icon {
          padding: 10px;
          cursor: pointer;
        }
      }
    }

    .main {
      position: relative;

      .content-container {
        text-align: left;
        padding-top: 50px;
        width: 100%;
        min-height: 800px;
        

        .page-title-container {
          padding-bottom: 10px;
          margin-bottom: 30px;
          overflow: hidden;
          border-bottom: 1px solid #30475e;
        }

        .page-title {
          font-size: 28px;
        }

        .welcome-msg, 
        .sub-heading 
        {
          font-size: 18px;
          font-weight: bold;
        }

        .programming-icon {
          padding: 20px;
        }
      }
    }
  } 

  @media only screen and (min-width: 1200px) {
    .sidebar {
      width: 261px;
    }
  }
</style>
