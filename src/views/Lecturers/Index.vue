<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-17T20:39:01+01:00
-->

<template>
<container class="lecturers">
  <b-row>
    <div class="col">
      <!-- <router-link class="  btn btn-primary" :to="{ name: 'courses_create'}">Create</router-link> -->
      <b-card bg-variant="dark" class="mt-4 mb-4" text-variant="white" title="Lecturers">
        <b-card-text>
          Listed are all of the currently available Lecturers at COLLEGE.
        </b-card-text>
        <b-card-text>
          Click below to create a new lecturer.
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

  <b-card-group class="mt-4" columns>
    <b-card v-for="lecturer in filterLecturers" :key="lecturer.id">
      <router-link :to="{name: 'lecturers_show', params: {id:lecturer.id, address:lecturer.address , email:lecturer.email , phone:lecturer.phone, enrolements:lecturer.enrolements} }">
        <!-- <img class="card-img-top" src="https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" alt="Card image cap"> -->
        <img v-for="image in images" :key="image.id" :src="image.urls.small" :alt="image.alt_description" class="img-fluid" />

        {{lecturer.name}}

      </router-link>
    </b-card>
  </b-card-group>

  <!-- <template>
  <div>
    <b-table striped hover :lecturers="lecturers"></b-table>
  </div>
</template> -->

</container>


</template>




<script>
import axios from 'axios';

// const API_URL = "https://college-api-scott.herokuapp.com/api/lecturers";

export default {
  name: 'LecturersIndex',
  components: {},
  data() {
    return {
      lecturers: [],
      term: "",
      filterLecturers: [],
      images: []

    }
  },
  watch: {
    term: function(newTerm, oldTerm) {
      console.log('New: ', newTerm)
      console.log('Old: ', oldTerm)
      this.searchLecturers();
    }
  },
  mounted() {

    this.searchUnsplash()


    let token = localStorage.getItem('token');
    axios.get('https://college-api-scott.herokuapp.com/api/lecturers', {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.lecturers = response.data.data;
        this.filterLecturers = response.data.data;

        // this.$router.replace({name:'lecturers_index'});
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data)
      })



  },
  methods: {
    searchUnsplash() {
      this.images = [];
      axios.get(`https://api.unsplash.com/search/photos?query=person&per_page=1 `, {
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
    getLecturers() {

      let token = localStorage.getItem('token');
      axios.get('https://college-api-scott.herokuapp.com/api/lecturers', {
          headers: {
            Authorization: "Bearer " + token
          }
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

    searchLecturers() {
      this.filterLecturers = this.lecturers.filter(lecturer => {
        if (lecturer.name.toLowerCase().includes(this.term.toLowerCase())) {
          return true
        }

        // if (course.code.toLowerCase().includes(this.term.toLowerCase())) {
        //   return true
        // }
      });
    },



    logout() {

      let token = localStorage.getItem('token');
      axios.get('https://college-api-scott.herokuapp.com/api/lecturers', {
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
      this.$router.replace({
        name: 'home'
      });
    },

    // searchLecturers(){
    //   let token = localStorage.getItem('token');
    //     if(!this.term && !this.limits){
    //         alert("please enter a search term!");
    //         return;
    //     }
    //
    //     axios.get(`https://college-api-scott.herokuapp.com/api/lecturers/search?api_key=${token}&q=${this.term}&limit=${this.limits}`)
    //     .then(response => (
    //         this.lecturers = response.data.data
    //         ))
    //         .catch(error => console.log(error))
    //
    //     this.limits="";
    //     this.term="";
    //     this.selectedResultNo=null;
    // },

  },

}
</script>

<style>

</style>
