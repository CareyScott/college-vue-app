<!--
@Date:   2021-04-13T12:02:51+01:00
@Last modified time: 2021-04-20T23:28:23+01:00
-->



<template>
<b-container class="courses mt-5">

  <b-card overlay img-src="https://picsum.photos/900/250/?image=3" img-alt="Card Image" text-variant="white" title="Edit Course" sub-title="New">
    <b-card-text>
      Enter course details into the form below. Make sure all of the information is correct before submitting.
    </b-card-text>
  </b-card>

  <div class="mt-5 card p-3">



    <b-row >
      <b-col>
        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput">Title:</label>
            <b-form-input type="text" v-model="course.title" class="form-control" placeholder="Enter title..."></b-form-input>
          </b-form-group>

        </b-col>
        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput2">Code:</label>
            <b-form-input type="text" v-model="course.code" class="form-control" placeholder="Enter course code..."></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput">Points:</label>
            <b-form-input type="range" v-model="course.points" min="100" max="625" class="form-control col" placeholder="Enter points..."></b-form-input>
            {{ course.points }}
            <!-- <b-form-input :id="range" type="range" v-model="form.points"  min="100" max="625" class="form-control col" placeholder="Points"></b-form-input> -->
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput">Level:</label>
            <br>
            <!-- <b-form-input type="text" v-model="form.level" class="form-control col" placeholder="Level"></b-form-input> -->
            <b-form-checkbox-group v-model="course.level" :options="levelOptions" name="level" buttons></b-form-checkbox-group>
          </b-form-group>
        </b-col>
        <b-col>

          <button class="btn btn-primary" @click="editCourse()">Submit</button>

        </b-col>
      </b-col>
      <b-col>

        <b-col>
          <b-form-group>
            <label for="formGroupExampleInput">Course Description</label>
            <b-form-textarea type="text" v-model="course.description" class="form-control" placeholder="Enter description..." rows="5"></b-form-textarea>
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
  name: 'CourseCreate',
  components: {},
  data() {
    return {
      course: {
        title: '',
      },

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
      // form: {
      //   title: "",
      //   code: "",
      //   description: "",
      //   points: "",
      //   level: "",
      // },

      errors: {}
    }
  },
  mounted() {

  this.getCourse();
  },
  methods: {
    getCourse(){
      this.id = this.$route.params.id

      let token = localStorage.getItem('token');

      axios.get('https://college-api-scott.herokuapp.com/api/courses/' + this.$route.params.id, {

          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.course = response.data.data;
          // this.$router.replace({name:'courses_index'});
        })

    },

    editCourse() {
      let token = localStorage.getItem('token');

      event.preventDefault()
      axios.put('https://college-api-scott.herokuapp.com/api/courses/' + this.$route.params.id, {
          title: this.course.title,
          code: this.course.code,
          description: this.course.description,
          points: this.course.points,
          level: this.course.level,
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
            title: 'Important Message',
            type: 'success',
            text: 'Course Updated Successfully.'
          });
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
          this.$notify({
            group: 'foo',
            title: 'Error',
            type: 'error',
            text: 'Something Went Wrong.'
          });
        })
    },

  },
}
</script>
<style>
.home {
  text-align: center;
}
</style>
