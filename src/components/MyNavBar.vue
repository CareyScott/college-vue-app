<!--
@Date:   2021-03-30T22:34:26+01:00
@Last modified time: 2021-04-19T13:55:33+01:00
-->


<template>
<div class="user" >
  <b-navbar toggleable="lg" type="dark" variant="light" class="text-dark">

    <b-navbar-brand to="/" class="text-dark">
      COLLEGE.
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

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
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"  v-model="term"></b-form-input>

          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->
        <b-button v-if="loggedIn" class="btn-dark" @click="logout()"> Logout </b-button>
        <b-button v-else class="btn-dark">
          <router-link class=" text-light" :to="{name: 'home'}">Login</router-link>
        </b-button>

        <!-- <b-nav-item-dropdown right>
          <template #button-content>
            {{user}}
            user
          </template>
          <div v-if="loggedIn">
            <b-dropdown-item lass="float-right" variant="danger" @click="logout()">
             Logout
          </b-dropdown-item>
          </div>
          <div v-else>
            <b-dropdown-item href="#">
              <router-link class="btn  ml-1" :to="{name: 'home'}">Login</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link class="btn  ml-1" :to="{name: 'register'}">Register</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link class="btn  ml-1" :to="{name: 'profile'}">Profile</router-link>
            </b-dropdown-item>
          </div>


        </b-nav-item-dropdown> -->
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
