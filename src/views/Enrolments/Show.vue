<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-19T00:45:21+01:00
-->

<template>
<b-container class="enrolments">
  <notifications group="foo" />
  <b-row>
    <div class="col g-0 mt-3   overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
      <b-col class="mb-4 mt-5">
        <!-- <div class="parallax shadow-sm mb-4"></div> -->

        <b-card overlay img-src="https://picsum.photos/900/250/?image=5" img-alt="Card Image" text-variant="white" title="Enrolment">
          <b-card-text>
            <h1 class="display-5 fw-bold mb-4 text-capitalize">{{enrolment.status}}</h1>
            <!-- <strong class="lead mb-4">{{enrolment.description}}</strong> -->
            <!-- <strong class="lead mb-4">{{enrolement.course}}</strong> -->
          </b-card-text>
        </b-card>


      </b-col>
    </div>

  </b-row>
  <b-row>
    <div class=" col-6 g-0 border  overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <b-col class=" p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">Enrolment Details</strong>
        <b-row>
          <div class="col mb-3">
            <h5 class="card-text mb-auto mt-3">Date:</h5>
            <h5 class="card-text mb-auto mt-3">Time:</h5>
            <h5 class="card-text mb-auto mt-3">Status:</h5>
            <h5 class="card-text mb-auto mt-3">Course:</h5>
            <h5 class="card-text mb-auto mt-3">Lecturer:</h5>
          </div>
          <div class="col text-info">
            <h5 class="card-text mb-auto mt-3 text-capitalize"> {{enrolment.date}}</h5>
            <h5 class="card-text mb-auto mt-3 text-capitalize">{{enrolment.time}}</h5>
            <h5 class="card-text mb-auto mt-3 text-capitalize">{{enrolment.status}}</h5>
            <h5 class="card-text mb-auto mt-3 text-capitalize">{{enrolment.course.title}}</h5>
            <h5 class="card-text mb-auto mt-3 text-capitalize">{{enrolment.lecturer.name}}</h5>
          </div>
        </b-row>
      </b-col>
    </div>
    <div class=" col-6 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <b-col class=" p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">Lecturer Details</strong>
        <b-row>
          <div class="col mb-3">
            <h5 class="card-text mb-auto mt-3">Address:</h5>
            <h5 class="card-text mb-auto mt-3">Email:</h5>
            <h5 class="card-text mb-auto mt-3">Phone:</h5>
          </div>
          <div class="col text-info">
            <h5 class="card-text mb-auto mt-3"> {{enrolment.lecturer.address}}</h5>
            <h5 class="card-text mb-auto mt-3">{{enrolment.lecturer.email}}</h5>
            <h5 class="card-text mb-auto mt-3">{{enrolment.lecturer.phone}}</h5>
          </div>
        </b-row>
      </b-col>
    </div>
    <div class=" col g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <b-col class=" p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">Course Details</strong>
        <b-row>
          <div class="col mb-3">
            <h5 class="card-text mb-auto mt-3">Course Title:</h5>
            <h5 class="card-text mb-auto mt-3">Description:</h5>
            <h5 class="card-text mb-auto mt-3">Course Code:</h5>
          </div>
          <div class="col text-info">
            <h5 class="card-text mb-auto mt-3"> {{enrolment.course.title}}</h5>
            <h5 class="card-text mb-auto mt-3">{{enrolment.course.description}}</h5>
            <h5 class="card-text mb-auto mt-3">{{enrolment.course.code}}</h5>
          </div>
        </b-row>
      </b-col>
    </div>
  </b-row>



  <!-- </b-row> -->
  <b-row class="mb-4">
    <b-col class="col-8"></b-col>
    <b-col class="col-2">
      <router-link class="btn btn-info float-right" :to="{name: 'enrolments_edit', params: {id:enrolment.id, title:enrolment.title , code:enrolment.code , level:enrolment.level, points:enrolment.points} }">
        Edit Enrolment
      </router-link>
    </b-col>
    <b-col class="col-2">
      <b-button class="btn-danger btn" id="show-btn" @click="$bvModal.show('delete-modal')">Delete Enrolment</b-button>
    </b-col>
  </b-row>

  <!-- <router-link class="btn btn-info ml-5 float-right" :to="{name: 'enrolments_edit', params: {id:enrolment.id, title:enrolment.title , code:enrolment.code , level:enrolment.level, points:enrolment.points} }">
      Edit Enrolment
    </router-link>
    <b-button class="btn-danger ml-4" id="show-btn float-right" @click="$bvModal.show('delete-modal')">Delete Enrolment</b-button> -->
  <b-modal id="delete-modal" hide-footer>
    <template #modal-title>
      Are you sure?
    </template>
    <div class="d-block text-center">
      <h4>Do you want to delete this enrolment?</h4>
    </div>
    <b-col>
      <b-button class="mt-3 btn btn-gray" block @click="$bvModal.hide('delete-modal')">Cancel</b-button>
    </b-col>
    <b-col>
      <b-button class="mt-3 btn btn-danger" block @click="deleteEnrolment()">Delete</b-button>
    </b-col>

  </b-modal>


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
  name: 'EnrolmentsShow',
  components: {},
  data() {
    return {
      enrolment: []
    }
  },
  mounted() {
    this.id = this.$route.params.id


    let token = localStorage.getItem('token');
    axios.get('https://college-api-scott.herokuapp.com/api/enrolments/' + this.$route.params.id, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.enrolment = response.data.data;
        this.enrolements = response.data.data;
        // this.$router.replace({name:'enrolments_index'});

        this.$notify({
          group: 'foo',
          title: 'Important message',
          text: 'Enrolment Loaded'
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
          // this.$router.replace({name:'enrolments_index'});

        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })

      localStorage.removeItem('token');
    },
    deleteEnrolment() {

      let token = localStorage.getItem('token');
      axios.delete('https://college-api-scott.herokuapp.com/api/enrolments/' + this.$route.params.id, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          // this.$router.replace({name:'enrolments_index'});
          this.$router.push({
            name: 'enrolments_index'
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
