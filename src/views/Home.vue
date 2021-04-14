<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-14T15:28:29+01:00
-->



<template>
<b-jumbotron class="mx-auto jumboboi mt-5" id="home">

  <b-row >
    <div class="mx-auto mt-5 col bg-light mb-5">
      <h1 class=" text-center">COLLEGE.</h1>
      <h1 class="h1 text-center mb-3">Login</h1>
    </div>
  </b-row>

  <b-row>
    <Login />
  </b-row>

</b-jumbotron>
</template>

<script>
import Login from '@/components/Auth/Login'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>

<style>
.home {
  text-align: center;
}
</style>
