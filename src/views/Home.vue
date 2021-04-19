<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-19T14:13:30+01:00
-->



<template>
<b-col class=" mt-5" id="home">

  <!-- <section>
    <b-card class="mx-auto mt-5 col-3 bg-light mb-5">
      <h1 class=" text-center">COLLEGE.</h1>
      <h1 class="h1 text-center ">Login</h1>

      <h1 v-if="loggedIn">You are logged in</h1>
      <h1 v-else>Not logged in</h1>
    </b-card>
  </section> -->

  <section class="home-header text-light">
    <div class="home-body">
      <div class="container">
        <h1>
          Welcome to COLLEGE.
        </h1>
        <h4 class="mb-4">
          View internal database information and create courses, enrolments and lecturers
        </h4>
        <div class="logged-in" v-if="loggedIn">
          <h3 class="logged-in-banner">Welcome User.Name</h3>
          <b-link to="/courses">
            <div class="btn text-light">
              <p class="home-custom-btn lighten-on-hover">Courses</p>
            </div>
          </b-link>
          <b-link to="/enrolments">
            <div class=" btn text-light">
              <p class="home-custom-btn lighten-on-hover">Enrolments</p>
            </div>
          </b-link>
          <b-link to="/lecturers">
            <div class=" btn text-light">
              <p class="home-custom-btn lighten-on-hover">Lecturers</p>
            </div>
          </b-link>

        </div>
        <div class="logged-out" v-else>
          <div class="button-block">
            <b-button v-b-toggle class="btn-dark" href="#register-collapse" @click.prevent>Sign Up to get started</b-button>
          </div>
          <h3 class="home-mid-body">OR</h3>
          <div class="button-block">
            <b-button v-b-toggle class="btn-dark" href="#login-collapse" @click.prevent>Login</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-4">
    <div class="container">
      <b-collapse id="login-collapse">
        <b-card>
          <h3 class="text-center mb-5 mt-3">LOGIN</h3>
          <Login class="col-4" />
          <footer>
            <small>Not Registered? Click <cite title="Source Title"><a v-b-toggle href="#register-collapse">Here</a></cite></small>
          </footer>
        </b-card>
      </b-collapse>
      <b-collapse id="register-collapse">
        <b-card>
          <h3 class="text-center mb-5 mt-3">REGISTER</h3>

          <Register class="col-4" />
          <footer>
            <small>Already got an account? Click <cite title="Source Title"><a v-b-toggle href="#login-collapse">Here</a></cite></small>
          </footer>
        </b-card>
      </b-collapse>

    </div>
  </section>


  <!-- <b-row>
    <Login />
  </b-row> -->

</b-col>
</template>
<style>
.home-header {
  text-align: center;
  background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 450px;
}

.home-body {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}

.home-mid-body {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 20px 0 0px 0;
  /* font-size: 60px; */
}
</style>
<script>
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'

export default {
  name: 'home',
  components: {
    Login,
    Register
  },
  props: {
    loggedIn: Boolean //<-- this is new line
  },
}
</script>

<style>
.home {
  text-align: center;
}

.home-custom-btn {
  background-color: black !important;
  margin: 20px;
  padding: 10px;
}

.lighten-on-hover:hover {
    text-decoration: underline;
    background-color: white !important;
    color: white !important;
}
</style>
