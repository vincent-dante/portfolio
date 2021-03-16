<template>
  <div class="content-container">
    <div class="page-title-container">
      <h1 class="page-title animate__animated animate__slideInLeft">Projects</h1>
    </div>

    <div class="animate__animated animate__fadeInUp">
      <a href="#">Web Design</a> /
      <a href="#">Graphic Design</a>
      
      <br>
      <br>
      <div class="project-container-item">
        <div class="project-item shadow">
          <a href="">
            <img src="../assets/manga-online.jpg" alt="image" srcset="">
            <div class="project-item-description">
              <h2>
                Manga Online
                <span>Web Design | Manga Reader Demo</span>
              </h2>
            </div>
          </a>
        </div>
        <div class="project-item shadow">
          <a href="">
            <img src="../assets/antonios.jpg" alt="image" srcset="">
            <div class="project-item-description">
              <h2>
                Antonios Restaurant
                <span>Web Design | Restaurant Demo</span>
              </h2>
              
            </div>
          </a>
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
  grid-gap: 20px;
  width: 100%; 
  padding: 50px 0;
}

.project-item {
  border-radius: 2px;
  overflow: hidden;

  a {
    position: relative;
    display: block;    
    background-color: #ddd;
  }

  img {
    width: 100%;
    transition: all 0.9s ease;
  }

  .project-item-description {
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;  
    left: 0;
    right: 0;
    background: #02152899;
    transition: all 0.5s ease-in-out;
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    opacity: 0;
    vertical-align: middle;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    text-shadow: 0 0 20px #000;

   span {
     display: block;
     font-size: 20px;
     font-weight: normal;
   } 
  }
  
}

.project-item:hover 
img 
{
  transform: scale(1.3);
}

.project-item:hover 
.project-item-description 
{
  opacity: 1;
}

.project-item:hover 
h2 
{
  opacity: 1;
  transform: scale(0.8);
}
</style>