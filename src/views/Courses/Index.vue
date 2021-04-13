<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-13T11:30:39+01:00
-->

<template>
<b-row class="courses">
  <b-col>
    <h2>Courses</h2>
  </b-col>

  <b-card-group columns>
      <b-card v-for="course in courses" :key="course.id"
      title="{{course.title}}"
      >

          <b-card-text>
            <router-link
            :to="{name: 'courses_show', params: {id:course.id} }">
            {{course.code}}
            {{course.level}}
            {{course.points}}
          </router-link>
        </b-card-text>
      </b-card>
  </b-card-group>

  <!-- <template>
  <div>
    <b-table striped hover :courses="courses"></b-table>
  </div>
</template> -->

</b-row>


</template>




<script>
import axios from 'axios';

// const API_URL = "https://college-api-scott.herokuapp.com/api/courses";

export default {
  name: 'CoursesIndex',
  components: {},
  data() {
    return {
      courses:[]
    }
  },
  mounted(){

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
   axios.get('https://college-api-scott.herokuapp.com/api/courses',{
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

 searchCourses(){
   let token = localStorage.getItem('token');
     if(!this.term && !this.limits){
         alert("please enter a search term!");
         return;
     }

     axios.get(`https://college-api-scott.herokuapp.com/api/courses/search?api_key=${token}&q=${this.term}&limit=${this.limits}`)
     .then(response => (
         this.courses = response.data.data
         ))
         .catch(error => console.log(error))

     this.limits="";
     this.term="";
     this.selectedResultNo=null;
 },

  },

}
</script>

<style>

</style>
