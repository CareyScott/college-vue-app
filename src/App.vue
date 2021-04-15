<!--
@Date:   2021-03-30T22:01:55+01:00
@Last modified time: 2021-04-15T20:42:54+01:00
-->



<template>
<div>
  <MyNavBar :loggedIn="this.loggedIn" v-on:login="setLoggedIn" v-on:logout="setLoggedOut" />
  <b-container>

    <notifications group="foo" />


    <vue-page-transition name="fade-in-up">
      <router-view :loggedIn="this.loggedIn" v-on:login="setLoggedIn" v-on:logout="setLoggedOut" />
    </vue-page-transition>


  </b-container>

</div>
</template>

<script>
import MyNavBar from './components/MyNavBar.vue'

export default {
  name: 'App',
  components: {
    MyNavBar
  },
  data() {
    return {
      loggedIn: false
    }
  },

  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
      console.log("APP: ", this.loggedIn);
    } else {
      this.loggedIn = false;
    }
  },
  mounted() {

    this.id = this.$route.params.id

  },
  methods: {
    setLoggedIn() {
      this.loggedIn = true;
      // optionally, you could store the token in localStorage here
    },
    setLoggedOut() {
      this.loggedIn = false;
      // optionally, you could trigger the whole logout process here
    }
  }
}
</script>

<style>

</style>
