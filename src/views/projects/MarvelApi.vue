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

    <img src="../../assets/marvel-api1.jpg" alt="" srcset="">

    <h2>Inroduction</h2>
    <p></p>
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