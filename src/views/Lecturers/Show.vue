<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-15T11:41:25+01:00
-->

<template>
<b-container class="lecturers">

  <b-row>
    <div class="col g-0 mt-3 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <b-col class="text-center mb-4 mt-5">
        <div class="parallax shadow-sm mb-4"></div>

        <h1 class="display-5 fw-bold mb-4">{{lecturer.title}}</h1>
        <strong class="lead mb-4">{{lecturer.description}}</strong>
        <strong class="lead mb-4">{{enrolements.name}}</strong>
      </b-col>
    </div>

  </b-row>

  <b-row>
    <div class=" col-6 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <b-col class=" p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">Lecturer Details</strong>
        <b-row>
          <div class="col mb-3">
            <h4 class="card-text mb-auto mt-3">Address:</h4>
            <h4 class="card-text mb-auto mt-3">Email:</h4>
            <h4 class="card-text mb-auto mt-3">Phone:</h4>
          </div>
          <div class="col text-info">
            <h4 class="card-text mb-auto mt-3"> {{lecturer.address}}</h4>
            <h4 class="card-text mb-auto mt-3">{{lecturer.email}}</h4>
            <h4 class="card-text mb-auto mt-3">{{lecturer.phone}}</h4>
          </div>
        </b-row>
      </b-col>
    </div>
    <div class=" col-6 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <b-col class=" p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">Lecturer enrolments</strong>
        <b-row>
          <div class="col mb-3">
            enrolments
          </div>
          <div class="col text-info">

          </div>
        </b-row>
      </b-col>
    </div>


  </b-row>

  <div class="col-6 mx-auto">
    <router-link class="btn btn-info ml-5 float-right" :to="{name: 'lecturers_edit', params: {id:lecturer.id, title:lecturer.title , code:lecturer.code , level:lecturer.level, points:lecturer.points} }">
      Edit Lecturer
    </router-link>
    <b-button class="btn-danger ml-4" id="show-btn float-right" @click="$bvModal.show('delete-modal')">Delete Lecturer</b-button>
    <b-modal id="delete-modal" hide-footer>
      <template #modal-title>
        Are you sure?
      </template>
      <div class="d-block text-center">
        <h4>Do you want to delete this lecturer?</h4>
      </div>
      <b-col>
        <b-button class="mt-3 btn btn-gray" block @click="$bvModal.hide('delete-modal')">Cancel</b-button>
      </b-col>
      <b-col>
        <b-button class="mt-3 btn btn-danger" block @click="deleteLecturer()">Delete</b-button>
      </b-col>

    </b-modal>

  </div>
</b-container>
</template>
<style>
.parallax {
  /* The image used */
  background-image: url("https://images.unsplash.com/photo-1562774053-701939374585?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80") !important;

  /* Set a specific height */
  min-height: 200px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


}

.jumboboi {


  /* The image used */
  background-image: url("https://images.unsplash.com/photo-1562774053-701939374585?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80") !important;

  /* Set a specific height */
  height: 100%;
  width: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


}
</style>
<script>
import axios from 'axios';


// const COURSE_ID = $route.params.id;

export default {
  name: 'LecturersShow',
  components: {},
  data() {
    return {
      lecturer: []
    }
  },
  mounted() {
    this.id = this.$route.params.id


    let token = localStorage.getItem('token');
    axios.get('https://college-api-scott.herokuapp.com/api/lecturers/' + this.$route.params.id, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.lecturer = response.data.data;
        this.enrolements = response.data.data;
        // this.$router.replace({name:'lecturers_index'});

        this.$notify({
          group: 'foo',
          title: 'Important message',
          text: 'Lecturer Loaded'
        });
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data)
      })


  },
  methods: {

    logout() {

      let token = localStorage.getItem('token');
      axios.get('https://college-api-scott.herokuapp.com/api/logout', {
          headers: {
            Authorization: "Bearer " + token
          }
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
    },
    deleteLecturer() {

      let token = localStorage.getItem('token');
      axios.delete('https://college-api-scott.herokuapp.com/api/lecturers/' + this.$route.params.id, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          // this.$router.replace({name:'lecturers_index'});
          this.$router.push({
            name: 'lecturers_index'
          });
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })

    },

  },

}
</script>

<style>

</style>
