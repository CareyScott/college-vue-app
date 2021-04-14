<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-14T16:26:32+01:00
-->

<template>
<b-row class="lecturers">
  <b-col>
    <h2>Lecturers</h2>
      <router-link class="  btn btn-primary" :to="{ name: 'lecturers_create'}">Create</router-link>
  </b-col>
  <b-col >
    <b-button class="float-right" variant="danger" @click="logout()">Logout</b-button>
  </b-col>

  <b-card-group columns>
      <b-card v-for="lecturer in lecturers" :key="lecturer.id">
            <router-link
            :to="{name: 'lecturers_show', params: {id:lecturer.id, address:lecturer.address , email:lecturer.email , phone:lecturer.phone, enrolements:lecturer.enrolements} }">
            <img class="card-img-top" src="https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" alt="Card image cap">

            {{lecturer.name}}

          </router-link>
      </b-card>
  </b-card-group>

  <!-- <template>
  <div>
    <b-table striped hover :lecturers="lecturers"></b-table>
  </div>
</template> -->

</b-row>


</template>




<script>
import axios from 'axios';

// const API_URL = "https://college-api-scott.herokuapp.com/api/lecturers";

export default {
  name: 'LecturersIndex',
  components: {},
  data() {
    return {
      lecturers:[]
    }
  },
  mounted(){



    let token = localStorage.getItem('token');
    axios.get('https://college-api-scott.herokuapp.com/api/lecturers',{
      headers: {Authorization: "Bearer " + token}
    })
    .then(response => {
      console.log(response.data);
      this.lecturers = response.data.data;
      // this.$router.replace({name:'lecturers_index'});
    })
    .catch(error => {
      console.log(error)
      console.log(error.response.data)
    })



  },
  methods: {
 getLecturers() {

   let token = localStorage.getItem('token');
   axios.get('https://college-api-scott.herokuapp.com/api/lecturers',{
     headers: {Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
     this.lecturers = response.data.data;
     // this.$router.replace({name:'lecturers_index'});
   })
   .catch(error => {
     console.log(error)
     console.log(error.response.data)
   })
 },



 logout() {

   let token = localStorage.getItem('token');
   axios.get('https://college-api-scott.herokuapp.com/api/lecturers',{
     headers: {Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
     // this.$router.replace({name:'lecturers_index'});
   })
   .catch(error => {
     console.log(error)
     console.log(error.response.data)
   })

   localStorage.removeItem('token');
   this.$router.replace({name:'home'});
 },

 searchLecturers(){
   let token = localStorage.getItem('token');
     if(!this.term && !this.limits){
         alert("please enter a search term!");
         return;
     }

     axios.get(`https://college-api-scott.herokuapp.com/api/lecturers/search?api_key=${token}&q=${this.term}&limit=${this.limits}`)
     .then(response => (
         this.lecturers = response.data.data
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
