<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-20T23:40:08+01:00
-->

<template>
<b-container class="lecturers">



  <b-row>
    <div class="col g-0 mt-3   overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
      <b-col class=" mb-4 mt-5">
        <!-- <div class="parallax shadow-sm mb-4"></div> -->

        <b-card overlay img-src="https://picsum.photos/900/250/?image=9" img-alt="Card Image" text-variant="white" title="Lecturer">
          <b-card-text>
            <h1 class="display-5 fw-bold mb-4 text-capitalize">{{lecturer.name}}</h1>
            <!-- <strong class="lead mb-4">{{enrolment.description}}</strong> -->
            <!-- <strong class="lead mb-4">{{enrolement.course}}</strong> -->
          </b-card-text>
        </b-card>


      </b-col>
    </div>
  </b-row>





  <b-row>
    <div class=" col-6 g-0   flex-md-row mb-4  h-md-250 position-relative">
      <b-col class=" p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">Lecturer Details</strong>
        <b-row>
          <div class="col mb-3">
            <h5 class="card-text mb-auto mt-3">Address:</h5>
            <h5 class="card-text mb-auto mt-3">Email:</h5>
            <h5 class="card-text mb-auto mt-3">Phone:</h5>
          </div>
          <div class="col text-info">
            <h5 class="card-text mb-auto mt-3"> {{lecturer.address}}</h5>
            <h5 class="card-text mb-auto mt-3">{{lecturer.email}}</h5>
            <h5 class="card-text mb-auto mt-3">{{lecturer.phone}}</h5>
          </div>
        </b-row>
      </b-col>
    </div>
    <div class=" col-6 g-0   overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
      <b-col class=" p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">Lecturer enrolments</strong>
        <b-table class="text-center " striped hover :items="lecturer.enrolments" :fields="fields" >
        </b-table>
        <!-- <b-row>

          <div class="col text-info">

          </div>
        </b-row> -->
      </b-col>
    </div>


  </b-row>


  <b-row class="mb-4">
    <b-col class="col-8"></b-col>
    <b-col class="col-2">
      <router-link class="btn btn-info" :to="{name: 'lecturers_edit', params: {id:lecturer.id, title:lecturer.title , code:lecturer.code , level:lecturer.level, points:lecturer.points} }">
        Edit Lecturer
      </router-link>
    </b-col>
    <b-col class="col-2">
      <b-button class="btn-danger btn" id="show-btn" @click="$bvModal.show('delete-modal')">Delete Lecturer</b-button>
    </b-col>
  </b-row>

  <b-modal id="delete-modal" hide-footer>
    <template #modal-title>
      Are you sure?
    </template>
    <div class="d-block">
      <h4>
        <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>&nbsp; Do you want to delete this lecturer?
      </h4>
    </div>
    <div class="d-block mt-4 ">
      <h6 class="mb-3 ml-2">Existing Enrolments:</h6>
      <b-table class="text-center" striped hover :items="lecturer.enrolments" :fields="fields">
      </b-table>

    </div>

    <b-col>
      <b-row>
        <b-col>
          <!-- <b-button class="mt-3 btn btn-danger" block @click="deleteCourse()">Delete</b-button> -->

          <b-form-invalid-feedback :state="state">I accept that deleting this Lecturer will delete all enrolments assigned to it.</b-form-invalid-feedback>
          <b-form-invalid-feedback :state="state" class="mb-3">This action cannot be Un-done.</b-form-invalid-feedback>

          <b-form-checkbox-group v-model="value" :options="confirmDelete" :state="state" name="checkbox-validation">
            <b-form-valid-feedback :state="state">
              <b-button class="mt-3 btn btn-danger col" block @click="deleteLecturer()">Delete</b-button>
            </b-form-valid-feedback>
          </b-form-checkbox-group>

        </b-col>
      </b-row>
      <b-row>
        <b-button class="mt-3 btn btn-gray" block @click="$bvModal.hide('delete-modal')">Cancel</b-button>
      </b-row>
    </b-col>

  </b-modal>

  <!-- <div class="col-6 mx-auto">
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

  </div> -->


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
      value: [],
      confirmDelete: [{
          text: 'I Understand',
          value: 'first'
        },


      ],
      fields: [{
          key: 'date',
          sortable: true,
        },
        {
          key: 'time',
          sortable: false,
        },
        {
          key: 'status',
          sortable: true,
        },

      ],
      lecturer: []
    }
  },
  computed: {
    state() {
      return this.value.length === 1
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
          type: 'success',

          title: 'Important message',
          text: 'Lecturer Loaded'
        });
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data)
        this.$notify({
          group: 'foo',
          title: 'Error',
          type: 'error',
          text: 'Something Went Wrong.'
        });
      })


  },
  methods: {

    // logout() {
    //
    //   let token = localStorage.getItem('token');
    //   axios.get('https://college-api-scott.herokuapp.com/api/logout', {
    //       headers: {
    //         Authorization: "Bearer " + token
    //       }
    //     })
    //     .then(response => {
    //       console.log(response.data);
    //       // this.$router.replace({name:'lecturers_index'});
    //
    //     })
    //     .catch(error => {
    //       console.log(error)
    //       console.log(error.response.data)
    //     })
    //
    //   localStorage.removeItem('token');
    // },
    deleteLecturer() {

      let token = localStorage.getItem('token');

      this.lecturer.enrolments.forEach((enrolment) => {
        axios
          .delete('https://college-api-scott.herokuapp.com/api/enrolments/' + enrolment.id, {
            headers: {
              Authorization: "Bearer " + token
            }
          })
          .catch(function(error) {
            console.log(error);
            this.$notify({
              group: 'foo',
              title: 'Error',
              type: 'error',
              text: 'Something Went Wrong. Enrolment not deleted'
            });
          });
      });

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
          this.$notify({
            group: 'foo',
            title: 'Important message',
            text: 'Lecturer deleted Successfully!',
            type: 'success',
            speed: 700,
            data: {
              width: 550,

            }
          });
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
          this.$notify({
            group: 'foo',
            title: 'Error',
            type: 'error',
            text: 'Something Went Wrong. Lecturer not deleted'
          });
        })

    },

  },

}
</script>

<style>

</style>
