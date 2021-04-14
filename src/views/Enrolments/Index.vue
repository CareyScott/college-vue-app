<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-14T23:17:06+01:00
-->

<template>
<b-row class="enrolments">
  <b-col>
    <h2>Enrolments</h2>
      <router-link class="  btn btn-primary" :to="{ name: 'enrolments_create'}">Create</router-link>
  </b-col>
  <b-col >
    <b-button class="float-right" variant="danger" @click="logout()">Logout</b-button>
  </b-col>

  <b-card-group columns>
      <b-card v-for="enrolment in enrolments" :key="enrolment.id">
            <router-link
            :to="{name: 'enrolments_show', params: {id:enrolment.id, date:enrolment.date , time:enrolment.time , status:enrolment.status, course_id:enrolment.course_id, lecturer_id:enrolment.lecturer_id} }">
            <img class="card-img-top" src="https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" alt="Card image cap">

            {{enrolment.status}}

          </router-link>
      </b-card>
  </b-card-group>

  <!-- <template>
  <div>
    <b-table striped hover :enrolments="enrolments"></b-table>
  </div>
</template> -->

</b-row>


</template>




<script>
import axios from 'axios';

// const API_URL = "https://college-api-scott.herokuapp.com/api/enrolments";

export default {
  name: 'EnrolmentsIndex',
  components: {},
  data() {
    return {
      enrolments:[]
    }
  },
  mounted(){



    let token = localStorage.getItem('token');
    axios.get('https://college-api-scott.herokuapp.com/api/enrolments',{
      headers: {Authorization: "Bearer " + token}
    })
    .then(response => {
      console.log(response.data);
      this.enrolments = response.data.data;
      // this.$router.replace({name:'enrolments_index'});
    })
    .catch(error => {
      console.log(error)
      console.log(error.response.data)
    })



  },
  methods: {
 getEnrolments() {

   let token = localStorage.getItem('token');
   axios.get('https://college-api-scott.herokuapp.com/api/enrolments',{
     headers: {Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
     this.enrolments = response.data.data;
     // this.$router.replace({name:'enrolments_index'});
   })
   .catch(error => {
     console.log(error)
     console.log(error.response.data)
   })
 },



 logout() {

   let token = localStorage.getItem('token');
   axios.get('https://college-api-scott.herokuapp.com/api/enrolments',{
     headers: {Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
     // this.$router.replace({name:'enrolments_index'});
   })
   .catch(error => {
     console.log(error)
     console.log(error.response.data)
   })

   localStorage.removeItem('token');
   this.$router.replace({name:'home'});
 },

 searchEnrolments(){
   let token = localStorage.getItem('token');
     if(!this.term && !this.limits){
         alert("please enter a search term!");
         return;
     }

     axios.get(`https://college-api-scott.herokuapp.com/api/enrolments/search?api_key=${token}&q=${this.term}&limit=${this.limits}`)
     .then(response => (
         this.enrolments = response.data.data
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
