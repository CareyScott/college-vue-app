<!--
@Date:   2021-04-13T12:02:51+01:00
@Last modified time: 2021-04-16T22:00:23+01:00
-->



<template>
<b-container class="enrolments mt-5">

  <b-card overlay img-src="https://picsum.photos/900/250/?image=3" img-alt="Card Image" text-variant="white" title="Edit Enrolment" sub-title="New">
    <b-card-text>
      Enter enrolment details into the form below. Make sure all of the information is correct before submitting.
    </b-card-text>
  </b-card>

  <div class="mt-5">
    <b-row>
      <b-col class="col-6">
        <b-form-group>
          <label for="formGroupExampleInput">Date</label>
          <b-form-input type="date" v-model="form.date" class="form-control" placeholder="date"></b-form-input><span v-if="errors.date"> {{ errors.date }} </span>
        </b-form-group>
        <b-form-group>
          <label for="formGroupExampleInput2">Time</label>
          <b-form-input type="time" v-model="form.time" class="form-control" placeholder="time"></b-form-input><span v-if="errors.time"> {{ errors.time }} </span>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group>
          <label for="formGroupExampleInput">Status</label>
          <b-form-select v-model="form.status" class="mb-3">

            <b-form-select-option :value="null" disabled> Please select an option </b-form-select-option>
            <b-form-select-option value="interested">Interested</b-form-select-option>
            <b-form-select-option value="assigned">Assigned</b-form-select-option>
            <b-form-select-option value="associate">Associate</b-form-select-option>
            <b-form-select-option value="career_break">Career Break</b-form-select-option>
          </b-form-select>

          <!-- <b-form-input type="text" v-model="form.status" class="form-control" placeholder="status"></b-form-input><span v-if="errors.status"> {{ errors.status }} </span> -->
        </b-form-group>
        <b-form-group>
          <label for="formGroupExampleInput">Course</label>
          <v-select :options="courses" v-model="form.course_id" :reduce="courses => courses.id" label="title" :key="courses.id"> ></v-select>
        </b-form-group>
        <b-form-group>
          <label for="formGroupExampleInput">Lecturer</label>
          <v-select :options="lecturers" v-model="form.lecturer_id" :reduce="lecturers => lecturers.id" label="name" :key="lecturers.id"></v-select>
        </b-form-group>
      </b-col>
    </b-row>
  </div>

  <!-- <select v-model="form.course_id">
      <option v-for="course in courses" :key="course.id">
        {{ course.id }}
      </option>
    </select>
    <select v-model="form.lecturer_id">
      <option v-for="lecturer in lecturers" :key="lecturer.id">
        {{ lecturer.id }}
      </option>
    </select> -->

  <!-- <b-form-group>
        <label for="formGroupExampleInput">lecturer_id</label>
        <b-form-input type="text" v-model="form.lecturer_id" class="form-control" placeholder="lecturer_id"></b-form-input><span v-if="errors.lecturer_id"> {{ errors.lecturer_id }} </span>
      </b-form-group> -->

  <button class="btn btn-primary" @click="editEnrolment()">Submit</button>



</b-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EnrolmentCreate',
  components: {},
  data() {
    return {

      courses: [],
      lecturers: [],
      enrolment: [],
      form: {
        date: "",
        time: "",
        status: "",
        course_id: "",
        lecturer_id: "",
      },
      // enrolment: [],

      errors: {}
    }
  },
  mounted() {



    this.id = this.$route.params.id

    let token = localStorage.getItem('token');
    axios.get('https://college-api-scott.herokuapp.com/api/courses', {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.courses = response.data.data;
        // this.$router.replace({name:'enrolments_index'});
      })
    axios.get('https://college-api-scott.herokuapp.com/api/lecturers', {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.lecturers = response.data.data;
        // this.$router.replace({name:'enrolments_index'});
      })
    axios.get('https://college-api-scott.herokuapp.com/api/enrolments/' + this.$route.params.id, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.enrolment = response.data.data;
        // this.$router.replace({name:'enrolments_index'});
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data)
      })

    this.id = this.$route.params.id

  },
  methods: {
    editEnrolment() {
      let token = localStorage.getItem('token');


      axios.put('https://college-api-scott.herokuapp.com/api/enrolments/' + this.$route.params.id, {
          date: this.form.date,
          time: this.form.time,
          status: this.form.status,
          course_id: this.form.course_id,
          lecturer_id: this.form.lecturer_id,
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
