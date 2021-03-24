<template>
  <div class="content-container">
    <div class="page-title-container">
      <h1 class="page-title animate__animated animate__slideInLeft">Projects</h1>
    </div>

    <div class="animate__animated animate__fadeInUp">
      <router-link to="/projects/" class="link-projects">Web Design</router-link> |
      <router-link to="/projects/graphicdesign" class="link-projects">Graphic Design</router-link> 
      

      <div class="content-projects">
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animate__animated animate__slideInUp">
            <component :is="Component" />
          </transition>
        </router-view>
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

.link-projects {
  color: #909090;
  text-decoration: none;
}

.content-projects {
  margin: 50px 0 200px 0;
}

.router-link-exact-active {  
  color: #e71a1a;
  transition: all 0.5s;
}

</style>