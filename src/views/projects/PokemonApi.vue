<template>
  <div>
    <a @click="$router.go(-1)">
      <i class="fas fa-long-arrow-alt-left"></i>
      Back
    </a>

    <h1>Poké Api</h1>
    <p>Pokemon using poké api</p>
    <span>
      Date <br>
      2021.02
    </span>

    <br>
    <br>
    <br>

    <img src="../../assets/pokemon-api1.jpg" alt="" srcset="" class="shadow">

    <h2>Background</h2>
    <p>
      This project i use Poke Api for getting pokemon data.<br>
    </p>
    <p>Live Website: <a href="https://pokemon-app-vincentdante.herokuapp.com" target="_blank">PokeApi</a></p>
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