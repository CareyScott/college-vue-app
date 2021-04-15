<!--
@Date:   2021-03-30T22:34:26+01:00
@Last modified time: 2021-04-15T22:30:39+01:00
-->


<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-navbar-brand href="#">
        COLLEGE.
      </b-navbar-brand>
      <b-nav-item to="/">Home</b-nav-item>
      <!-- <b-nav-item to ="/about">About</b-nav-item>
      <b-nav-item to ="/contact">Contact</b-nav-item> -->
      <b-nav-item to="/courses">Courses</b-nav-item>
      <b-nav-item to="/lecturers">Lecturers</b-nav-item>
      <b-nav-item to="/enrolments">Enrolements</b-nav-item>
      <!-- <b-nav-item to="/login">Login</b-nav-item> -->

      <div v-if="loggedIn">
        <router-link class="btn btn-info ml-1" :to="{name: 'home'}" >Login</router-link>
        <router-link class="btn btn-info ml-1" :to="{name: 'register'}" >Register</router-link>
      </div>
      <div v-else>
        <b-button class="float-right" variant="danger" @click="logout()">Logout</b-button>
      </div>
      <!-- <b-nav-item to ="/courses/create">Create</b-nav-item> -->
    </b-navbar-nav>
  </b-navbar>

  <!-- <router-link to ="/">Home</router-link>

<router-link to ="/about">About</router-link>
<router-link to ="/contact">Contact</router-link> -->


  <!-- <router-link :to = "{name: 'testing', params: {id: 123}}">Testing</router-link> -->


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
      courses: {
        lecturers: []
      }
    }
  },
  mounted() {

  },
  methods: {

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
      axios.get('https://college-api-scott.herokuapp.com/api/courses', {
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
/* #nav {
  padding: 30px;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {

  color: #42b983;
} */
</style>
