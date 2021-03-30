<template>
  <div>
    <a @click="$router.go(-1)">
      <i class="fas fa-long-arrow-alt-left"></i>
      Back
    </a>

    <h1>Marvel Api</h1>
    <p>Marvel characters using marvel api</p>
    <span>
      Date <br>
      2021.02
    </span>

    <br>
    <br>
    <br>

    <img src="../../assets/marvel-api1.jpg" alt="" srcset="" class="shadow">

    <h2>Background</h2>
    <p>
      Marvel Characters is a project a made for Marvel Api.<br>
      It's fun working on this project because i learn a lot about api and also working on my favorite marvel characters.
    </p>
    <p>Live Website: <a href="https://marvel-app-vincentdante.herokuapp.com" target="_blank">Marvel Characters</a></p>
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