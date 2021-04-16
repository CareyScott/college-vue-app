<!--
@Date:   2021-03-30T22:34:26+01:00
@Last modified time: 2021-04-17T00:15:55+01:00
-->


<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">

    <b-navbar-brand to="/">
      COLLEGE.
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- LEFT SIDE -->
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <!-- <b-nav-item to ="/about">About</b-nav-item>
      <b-nav-item to ="/contact">Contact</b-nav-item> -->
        <b-nav-item to="/courses">Courses</b-nav-item>
        <b-nav-item to="/lecturers">Lecturers</b-nav-item>
        <b-nav-item to="/enrolments">Enrolements</b-nav-item>
        <!-- <b-nav-item to="/login">Login</b-nav-item> -->

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"  v-model="term"></b-form-input>

          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
          User
          </template>
          <div v-if="loggedIn">
            <b-dropdown-item href="#">
              <router-link class="btn  ml-1" :to="{name: 'home'}">Login</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link class="btn  ml-1" :to="{name: 'register'}">Register</router-link>
            </b-dropdown-item>
          </div>
          <div v-else>
            <b-button class="float-right" variant="danger" @click="logout()">Logout</b-button>
          </div>


        </b-nav-item-dropdown>
      </b-navbar-nav>



      <!-- <div v-if="loggedIn">
        <router-link class="btn btn-info ml-1" :to="{name: 'home'}">Login</router-link>
        <router-link class="btn btn-info ml-1" :to="{name: 'register'}">Register</router-link>
      </div>
      <div v-else>
        <b-button class="float-right" variant="danger" @click="logout()">Logout</b-button>
      </div> -->
      <!-- <b-nav-item to ="/courses/create">Create</b-nav-item> -->

    </b-collapse>
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
