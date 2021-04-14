<!--
@Date:   2021-04-13T12:02:51+01:00
@Last modified time: 2021-04-14T16:14:57+01:00
-->



<template>
<b-container class="courses mt-5">

  <b-row>
    <div>
      <h1>Edit Course</h1>
    </div>
  </b-row>
  <!-- title: <input type="text" v-model="form.title" /> <br>
    code: <input type="text" v-model="form.code" /> <span v-if="errors.code"> {{ errors.code }} </span><br>
    description: <input type="text" v-model="form.description" /> <br>
    points: <input type="text" v-model="form.points" /> <span v-if="errors.points"> {{ errors.points }} </span><br>
    level: <input type="text" v-model="form.level" /> <span v-if="errors.level"> {{ errors.level }} </span><br> -->

    <div class="mt-5">
      <b-form-group>
        <label for="formGroupExampleInput">Title</label>
        <b-form-input type="text" v-model="form.title" class="form-control" placeholder="Title"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput2">Code</label>
        <b-form-input type="text" v-model="form.code" class="form-control" placeholder="Code"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput">Description</label>
        <b-form-input type="text" v-model="form.description" class="form-control" placeholder="Description"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput">points</label>
        <b-form-input type="text" v-model="form.points" class="form-control" placeholder="Points"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput">Level</label>
        <b-form-input type="text" v-model="form.level" class="form-control" placeholder="Level"></b-form-input>
      </b-form-group>
    </div>

    <button class="btn btn-primary" @click="editCourse()">Submit</button>



</b-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CourseCreate',
  components: {},
  data() {
    return {
      form: {
        title: "",
        code: "",
        description: "",
        points: "",
        level: "",
      },
      course: [],
      errors: {}
    }
  },
  mounted() {

    this.id = this.$route.params.id

  },
  methods: {
    editCourse() {
      let token = localStorage.getItem('token');


      axios.put('https://college-api-scott.herokuapp.com/api/courses/' + this.$route.params.id,{
          title: this.form.title,
          code: this.form.code,
          description: this.form.description,
          points: this.form.points,
          level: this.form.level,
        }, {
          headers: {  Authorization: "Bearer " + token}
        })
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: 'courses_index' });
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
