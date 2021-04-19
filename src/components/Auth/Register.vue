<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-18T23:28:58+01:00
-->

<template>
<div class="mx-auto">
  <b-row>
    <b-form-input class=" col  " v-model="form.name" placeholder="Enter Name" type="text" />
  </b-row>
  <b-row>
    <b-form-input class=" col mt-3 " v-model="form.email" placeholder="Enter Email" type="email" />
  </b-row>
  <b-row>
    <b-form-input class=" col mt-3 " v-model="form.password" placeholder="Enter Password" type="password" />
  </b-row>
  <b-row>
    <b-button class=" col mt-3 " variant="primary" @click="register()">Register</b-button>
  </b-row>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  components: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      }
    }
  },
  methods: {
    register() {
      axios.post('https://college-api-scott.herokuapp.com/api/register', {

          name: this.form.name,
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
          this.$notify({ group: 'auth',type: 'warn',  text: 'Something went wrong. Please Try again.' })
          console.log(error.response)
        })
    }
  },

}
</script>

<style>

</style>
