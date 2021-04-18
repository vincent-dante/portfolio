<template>
  <div>
    <a @click="$router.go(-1)">
      <i class="fas fa-long-arrow-alt-left"></i>
      Back
    </a>

    <h1>Nasa Api</h1>
    <p>Nasa images using Nasa api</p>
    <span>
      Date <br>
      2021.04
    </span>

    <br>
    <br>
    <br>

    <img src="../../assets/nasa-api1.jpg" alt="" srcset="" class="shadow">

    <h2>Background</h2>
    <p>
      This project i use Nasa Api for getting nasa images<br>
    </p>
    <p>Live Website: <a href="https://nasa-app-vincentdante.herokuapp.com" target="_blank">NasaAPi</a></p>
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