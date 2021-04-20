<!--
@Date:   2021-03-30T22:34:26+01:00
@Last modified time: 2021-04-20T23:03:07+01:00
-->


<template>
<div class="user" >
  <b-navbar toggleable="lg" type="dark" variant="light" class="text-dark">

    <b-navbar-brand to="/" class="text-dark">
      COLLEGE.
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav v-on:login="setLoggedIn">

      <!-- LEFT SIDE -->
      <b-navbar-nav v-if="loggedIn" class="mt-3 ml-4">
        <b-nav-item to="/"><p class="text-dark underline-on-hover" variant="link">Home</p></b-nav-item>
        <b-nav-item to="/courses"><p class="text-dark underline-on-hover" variant="link">Courses</p></b-nav-item>
        <b-nav-item to="/lecturers"><p class="text-dark underline-on-hover" variant="link">Lecturers</p></b-nav-item>
        <b-nav-item to="/enrolments"><p class="text-dark underline-on-hover" variant="link">Enrolements</p></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else class="mt-3 ml-4">
        <b-nav-item to="/"><p class="text-dark underline-on-hover" variant="link">Home</p></b-nav-item>
        <b-nav-item to="/"><p class="text-dark underline-on-hover" variant="link">Courses</p></b-nav-item>
        <b-nav-item to="/"><p class="text-dark underline-on-hover" variant="link">Lecturers</p></b-nav-item>
        <b-nav-item to="/"><p class="text-dark underline-on-hover" variant="link">Enrolements</p></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button v-if="loggedIn" class="btn-dark" @click="logout()"> Logout </b-button>
        <b-button v-else class="btn-dark">
          <router-link class=" text-light" :to="{name: 'home'}">Login</router-link>
        </b-button>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>




</div>
</template>

<script>
import axios from 'axios';

// const API_URL = "https://college-api-scott.herokuapp.com/api/courses";

export default {
  name: 'MyNavBar',
  components: {

  },
  props: {
    loggedIn: Boolean //<-- this is new line
  },
  data() {
    return {
      // isHovered: false,
      courses: {
        lecturers: []
      },
      user: [],
    }
  },
  mounted() {

    let token = localStorage.getItem('token');
    axios.get('https://college-api-scott.herokuapp.com/api/user', {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.user = response.data.data;

      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data)
      })

  },
  methods: {
    // handleHover(hovered) {
    //     this.isHovered = hovered
    //   },

    setLoggedIn() {
      this.loggedIn = true;

      // optionally, you could store the token in localStorage here
    },
    setLoggedOut() {
      this.loggedIn = false;
      // optionally, you could trigger the whole logout process here
    },


    logout() {

      let token = localStorage.getItem('token');
      axios.get('https://college-api-scott.herokuapp.com/api/logout', {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          // this.$router.replace({name:'courses_index'});
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })

      localStorage.removeItem('token');
      this.$emit('logout'); //<-- tells App.vue to update loggedIn
      this.$router.replace({
        name: 'home'
      });
    },


  }
}
</script>

<style>
.underline-on-hover:hover {
    text-decoration: underline;
}
</style>
