<template>
  <div>
    <a @click="$router.go(-1)">
      <i class="fas fa-long-arrow-alt-left"></i>
      Back
    </a>

    <h1>Manga Online</h1>
    <p>Manga Reader</p>
    <span>
      Date <br>
      2018.12
    </span>

    <br>
    <br>
    <br>

    <img src="../../assets/manga-online5.jpg" alt="" srcset="" class="shadow">

    <h2>Background</h2>
    <p>Manga Online is a project i made for my final project for my TESTDA course.</p>
    <p>Live Website: <a href="http://vincentdante.epizy.com/mangaonline/page/home.html" target="_blank">MangaOnline</a></p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

a {
  display: inline-block;
  margin-bottom: 50px;
  cursor: pointer;
}

img {
  width: 100%;
  margin-bottom: 50px;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

</style>