<!--
@Date:   2021-04-13T12:02:51+01:00
@Last modified time: 2021-04-18T22:56:04+01:00
-->



<template>
<b-container class="courses mt-5">

  <!-- <b-row>
    <div>
      <h1>Create Course</h1>
    </div>
  </b-row> -->


  <b-card
  overlay
  img-src="https://picsum.photos/900/250/?image=3"
  img-alt="Card Image"
  text-variant="white"
  title="Create Course"
  sub-title="New"

  >
  <b-card-text>
    Enter course details into the form below. Make sure all of the information is correct before submitting.
  </b-card-text>
  </b-card>

  <div class="mt-5 card p-3">



    <b-row>
      <b-col>
        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput">Title:</label>
            <b-form-input type="text" v-model="form.title" class="form-control" placeholder="Enter title..."></b-form-input>
          </b-form-group>

        </b-col>
        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput2">Code:</label>
            <b-form-input type="text" v-model="form.code" class="form-control" placeholder="Enter course code..."></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput">Points:</label>
            <b-form-input type="range" v-model="form.points" min="100" max="625" class="form-control col" placeholder="Enter points..."></b-form-input>
            {{ form.points }}
            <!-- <b-form-input :id="range" type="range" v-model="form.points"  min="100" max="625" class="form-control col" placeholder="Points"></b-form-input> -->
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput">Level:</label>
            <br>
            <!-- <b-form-input type="text" v-model="form.level" class="form-control col" placeholder="Level"></b-form-input> -->
            <b-form-checkbox-group v-model="form.level" :options="levelOptions" name="level" buttons></b-form-checkbox-group>
          </b-form-group>
        </b-col>
        <b-col>

          <button class="btn btn-primary" @click="createCourse()">Submit</button>

        </b-col>
      </b-col>
      <b-col>

        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput">Course Description</label>
            <b-form-textarea type="text" v-model="form.description" class="form-control" placeholder="Enter description..." rows="5"></b-form-textarea>
          </b-form-group>
        </b-col>

      </b-col>

    </b-row>

    <b-row>
      <b-col>

      </b-col>
    </b-row>


  </div>




</b-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'courses_create',
  components: {},
  data() {
    return {
      levelOptions: [

        {
          text: '7',
          value: '7'
        },
        {
          text: '8',
          value: '8'
        },
        {
          text: '9',
          value: '9'
        },
        {
          text: '10',
          value: '10'
        }
      ],
      form: {
        title: "",
        code: "",
        description: "",
        points: "",
        level: "",
      },
      errors: {}
    }
  },
  mounted() {

  },
  methods: {
    createCourse() {
      let token = localStorage.getItem('token');


      axios.post('https://college-api-scott.herokuapp.com/api/courses', {
          title: this.form.title,
          code: this.form.code,
          description: this.form.description,
          points: this.form.points,
          level: this.form.level,
        }, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.$router.push({
            name: 'courses_index'
          });
          this.$notify({
            group: 'foo',
            title: 'Important message',
            text: 'Course Created Successfully!',
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
