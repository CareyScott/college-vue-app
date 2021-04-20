@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-20T10:09:26+01:00
-->



<template>
<b-col class="jumboboi mt-5" id="home">

  <b-row>
    <b-card class="mx-auto mt-5 col-3 bg-light mb-5">
      <h1 class=" text-center">COLLEGE.</h1>
      <h1 class="h1 text-center ">Register</h1>

      <!-- <h1 v-if="loggedIn">You are logged in</h1>
      <h1 v-else>Not logged in</h1> -->
    </b-card>
  </b-row>

  <b-row>
    <Register />
  </b-row>

</b-col>
</template>

<script>
import Register from '@/components/auth/Register'

export default {
  name: 'home',
  components: {
    Register
  }
}
</script>

<style>
.home {
  text-align: center;
}
</style>
