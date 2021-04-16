<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-17T00:07:27+01:00
-->

<template>
<div class="courses mx-auto">
  <b-row>
    <b-form-input class=" col  " v-model="form.email" placeholder="Enter Email" type="email" />
  </b-row>
  <b-row>
    <b-form-input class=" col mt-3 " v-model="form.password" placeholder="Enter Password" type="password" />
  </b-row>
  <b-row>
    <b-button class=" col mt-3 " variant="primary" @click="login()">Log In</b-button>
  </b-row>

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
          this.$emit('login'); // <-- this is the new line
          this.$router.replace({
            name: 'courses_index'
          });
        })
        .catch(error => {
          console.log(error)
          this.$notify({ group: 'auth',type: 'warn',  text: 'Wrong password, please try again later' })
          console.log(error.response)

        })
    }
  },

}
</script>

<style>

</style>
