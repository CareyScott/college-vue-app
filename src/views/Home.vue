<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-15T20:29:42+01:00
-->



<template>
<b-col class="jumboboi mt-5" id="home">

  <b-row>
    <b-card class="mx-auto mt-5 col-3 bg-light mb-5">
      <h1 class=" text-center">COLLEGE.</h1>
      <h1 class="h1 text-center ">Login</h1>

      <h1 v-if="loggedIn">You are logged in</h1>
      <h1 v-else>Not logged in</h1>
    </b-card>
  </b-row>

  <b-row>
    <Login />
  </b-row>

</b-col>
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
