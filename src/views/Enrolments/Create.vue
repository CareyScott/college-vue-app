<!--
@Date:   2021-04-13T12:02:51+01:00
@Last modified time: 2021-04-14T23:17:23+01:00
-->



<template>
<b-container class="enrolments mt-5">

  <b-row>
    <div>
      <h1>Create Enrolment</h1>
    </div>
  </b-row>

  <div class="mt-5">
    <b-form-group>
      <label for="formGroupExampleInput">date</label>
      <b-form-input type="date" v-model="form.date" class="form-control" placeholder="date"></b-form-input><span v-if="errors.date"> {{ errors.date }} </span>
    </b-form-group>
    <b-form-group>
      <label for="formGroupExampleInput2">time</label>
      <b-form-input type="time" v-model="form.time" class="form-control" placeholder="time"></b-form-input><span v-if="errors.time"> {{ errors.time }} </span>
    </b-form-group>
    <b-form-group>
      <label for="formGroupExampleInput">status</label>
      <b-form-input type="text" v-model="form.status" class="form-control" placeholder="status"></b-form-input><span v-if="errors.status"> {{ errors.status }} </span>
    </b-form-group>
    <b-form-group>
      <label for="formGroupExampleInput">course_id</label>
      <b-form-input type="text" v-model="form.course_id" class="form-control" placeholder="course_id"></b-form-input><span v-if="errors.course_id"> {{ errors.course_id }} </span>
    </b-form-group>
    <b-form-group>
      <label for="formGroupExampleInput">lecturer_id</label>
      <b-form-input type="text" v-model="form.lecturer_id" class="form-control" placeholder="lecturer_id"></b-form-input><span v-if="errors.lecturer_id"> {{ errors.lecturer_id }} </span>
    </b-form-group>
  </div>


  <button class="btn btn-primary" @click="createEnrolment()">Submit</button>


</b-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'enrolments_create',
  components: {},
  data() {
    return {
      form: {
        name: "",
        address: "",
        email: "",
        phone: "",
      },

      errors: {}
    }
  },
  mounted() {

  },
  methods: {
    createEnrolment() {
      let token = localStorage.getItem('token');


      axios.post('https://college-api-scott.herokuapp.com/api/enrolments', {
          name: this.form.name,
          address: this.form.address,
          email: this.form.email,
          phone: this.form.phone,

        }, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.$router.push({
            name: 'enrolments_index'
          });


        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
        })
    }
  },
}
</script>
<style>
.home {
  text-align: center;
}
</style>
