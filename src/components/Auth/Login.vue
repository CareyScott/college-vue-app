<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-07T17:45:28+01:00
-->

<template>
<b-row class="courses">
  <b-col>
  <b-form-input v-model="form.email" placeholder="Enter your email" type="email"/>
</b-col>
<b-col>
  <b-form-input v-model="form.password" placeholder="Enter your password" type="password"/>
</b-col>

  <b-button variant="outline-primary" @click="login()">Submit</b-button>
</b-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      form:{
        email: "",
        password: ""
      }
    }
  },
  methods:{
    login(){
      axios.post('https://college-api-scott.herokuapp.com/api/login',{

        email: this.form.email,
        password: this.form.password

      })
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        this.$router.replace({name:'courses_index'});
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
