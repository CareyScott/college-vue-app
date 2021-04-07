<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-07T18:04:25+01:00
-->

<template>
<b-row class="courses">
  <b-col>
    <h2>This is the courses page</h2>
  </b-col>
  <b-col>
    <b-button variant="outline-primary" @click="getCourses()">Get Courses</b-button>
  </b-col>
  <b-col>
    <b-button variant="outline-danger" @click="logout()">Logout</b-button>
  </b-col>
</b-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CoursesIndex',
  components: {},
  data() {
    return {
      courses:[]
    }
  },
  methods: {
 getCourses() {

   let token = localStorage.getItem('token');
   axios.get('https://college-api-scott.herokuapp.com/api/courses',{
     headers: {Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
     this.courses = response.data.data;
     // this.$router.replace({name:'courses_index'});
   })
   .catch(error => {
     console.log(error)
     console.log(error.response.data)
   })
 },
 logout() {

   let token = localStorage.getItem('token');
   axios.get('https://college-api-scott.herokuapp.com/api/logout',{
     headers: {Authorization: "Bearer " + token}
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
 },

  },

}
</script>

<style>

</style>
