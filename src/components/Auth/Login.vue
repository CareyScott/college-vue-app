<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-14T15:27:58+01:00
-->

<template>
<div class="courses container-fluid">
  <b-col class="">
  <b-row>
    <b-form-input class="col-3 mx-auto text-center" v-model="form.email" placeholder="Email" type="email" />
  </b-row>
  <b-row>
    <b-form-input class="col-3 mx-auto mt-3 text-center" v-model="form.password" placeholder="Password" type="password" />
  </b-row>
  <b-row>
    <b-button class="mx-auto col-3 mt-3 text-center" variant="primary" @click="login()">Log In</b-button>
  </b-row>
</b-col>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      axios.post('https://college-api-scott.herokuapp.com/api/login', {

          email: this.form.email,
          password: this.form.password

        })
        .then(response => {
          console.log(response);
          localStorage.setItem('token', response.data.token);
          this.$router.replace({
            name: 'courses_index'
          });
        })
        .catch(error => {
          console.log(error)
          console.log(error.response)
        })
    }
  },

}
</script>

<style>

</style>
