<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-16T23:56:01+01:00
-->

<template>
  <container>
  <b-row>
    <div class="col">
      <!-- <router-link class="  btn btn-primary" :to="{ name: 'courses_create'}">Create</router-link> -->
      <b-card bg-variant="dark" class="mt-4 mb-4" text-variant="white" title="Courses">
        <b-card-text>
          Listed are all of the currently available courses at COLLEGE.
        </b-card-text>
        <b-card-text>
          Click below to create a new Course.
        </b-card-text>
        <router-link class="btn-primary btn" :to="{ name: 'courses_create'}">Create</router-link>
      </b-card>
    </div>
  </b-row>
  <b-row>
    <b-col>
      <b-form-input size="md" class="mr-sm-2 col-4" :type="search" placeholder="Search" v-model="term"></b-form-input>
    </b-col>
  </b-row>

  <b-row>
    <b-card class="col-4 mt-3" v-for="filterCourse in filterCourses" :key="filterCourse.id">
      <router-link :to="{name: 'courses_show', params: {id:filterCourse.id, title:filterCourse.title , code:filterCourse.code , level:filterCourse.level, points:filterCourse.points} }">
        {{filterCourse.title.substring(0,30)+".."}}
        <img v-for="image in images" :key="image.id" :src="image.urls.small" :alt="image.alt_description" class="img-fluid" />
      </router-link>
    </b-card>
  </b-row>
</container>
</template>
<!-- <template>
<div>
  <b-table striped hover :courses="courses"></b-table>
</div>
</template> -->
<!-- <b-col >
<b-button class="float-right" variant="danger" @click="logout()">Logout</b-button>
</b-col> -->




<script>
import axios from 'axios';

// const API_URL = "https://college-api-scott.herokuapp.com/api/courses";

export default {

  name: 'CoursesIndex',
  components: {},
  data() {
    return {
      courses: [],
      term: "",
      filterCourses: [],
      images: []
    }
  },

  watch: {
    term: function(newTerm, oldTerm) {
      console.log('New: ', newTerm)
      console.log('Old: ', oldTerm)
      this.searchCourse();
    }
  },

  mounted() {



    this.searchUnsplash()

    let token = localStorage.getItem('token');

    axios.get('https://college-api-scott.herokuapp.com/api/courses', {

        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.courses = response.data.data;
        this.filterCourses = response.data.data;
        // this.$router.replace({name:'courses_index'});
      })

    // this.images = [];
    // axios.get('https://api.unsplash.com/photos/', {
    //     headers: {
    //       Authorization: "Client-ID 99s9eFcJIH_mgs5cHe7nCvdAk2z9wkf5uXxkbo9S83k", "Accept-Version": "v1"
    //     }
    //   })
    //   .then(response => {
    //     this.images = response.data.results;
    //   })
    //   .catch(() => {
    //     this.images = [];
    //   });






  },
  computed: {

  },

  methods: {


    searchUnsplash() {
      this.images = [];
      axios.get(`https://api.unsplash.com/search/photos?query=photography&per_page=1
      `, {
          headers: {
            Authorization: "Client-ID 99s9eFcJIH_mgs5cHe7nCvdAk2z9wkf5uXxkbo9S83k",
            "Accept-Version": "v1"
          }
        })
        .then(response => {
          this.images = response.data.results;
        })
        .catch(() => {
          this.images = [];
        });
    },

    searchCourse() {
      this.filterCourses = this.courses.filter(course => {
        if (course.title.toLowerCase().includes(this.term.toLowerCase())) {
          return true
        }

        if (course.code.toLowerCase().includes(this.term.toLowerCase())) {
          return true
        }
      });
    },



    //
    // logout() {
    //
    //   let token = localStorage.getItem('token');
    //   axios.get('https://college-api-scott.herokuapp.com/api/courses',{
    //     headers: {Authorization: "Bearer " + token}
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //     // this.$router.replace({name:'courses_index'});
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     console.log(error.response.data)
    //   })
    //
    //   localStorage.removeItem('token');
    //   this.$router.replace({name:'home'});
    // },

    // searchCourses() {
    //   let token = localStorage.getItem('token');
    //   if (!this.term && !this.limits) {
    //     alert("please enter a search term!");
    //     return;
    //   }
    //
    //   axios.get(`https://college-api-scott.herokuapp.com/api/courses/search?api_key=${token}&q=${this.term}&limit=${this.limits}`)
    //     .then(response => (
    //       this.courses = response.data.data
    //     ))
    //     .catch(error => console.log(error))
    //
    //   this.limits = "";
    //   this.term = "";
    //   this.selectedResultNo = null;
    // },

  },

}
</script>

<style>

</style>
