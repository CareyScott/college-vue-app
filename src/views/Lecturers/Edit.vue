<!--
@Date:   2021-04-13T12:02:51+01:00
@Last modified time: 2021-04-16T23:49:49+01:00
-->



<template>
<b-container class="lecturers mt-5">


  <!-- title: <input type="text" v-model="form.title" /> <br>
    code: <input type="text" v-model="form.code" /> <span v-if="errors.code"> {{ errors.code }} </span><br>
    description: <input type="text" v-model="form.description" /> <br>
    points: <input type="text" v-model="form.points" /> <span v-if="errors.points"> {{ errors.points }} </span><br>
    level: <input type="text" v-model="form.level" /> <span v-if="errors.level"> {{ errors.level }} </span><br> -->

    <!-- <div class="mt-5">
      <b-form-group>
        <label for="formGroupExampleInput">Name</label>
        <b-form-input type="text" v-model="form.name" class="form-control" placeholder="Name"></b-form-input><span v-if="errors.name"> {{ errors.name }} </span>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput2">Address</label>
        <b-form-input type="text" v-model="form.address" class="form-control" placeholder="Address"></b-form-input><span v-if="errors.address"> {{ errors.address }} </span>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput">Email</label>
        <b-form-input type="text" v-model="form.email" class="form-control" placeholder="Email"></b-form-input><span v-if="errors.email"> {{ errors.email }} </span>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput">Phone</label>
        <b-form-input type="text" v-model="form.phone" class="form-control" placeholder="Phone"></b-form-input><span v-if="errors.phone"> {{ errors.phone }} </span>
      </b-form-group>
    </div> -->

    <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Edit Lecturer"
    sub-title="New"

    >
    <b-card-text>
      Enter lecturers details into the form below. Make sure all of the information is correct before submitting.
    </b-card-text>
    </b-card>

    <div class="mt-3">
      <b-form-group>
        <label for="formGroupExampleInput">Name</label>
        <b-form-input type="text" v-model="form.name" class="form-control" placeholder="Name"></b-form-input><span v-if="errors.name"> {{ errors.name }} </span>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput2">Address</label>
        <b-form-input type="text" v-model="form.address" class="form-control" placeholder="Address"></b-form-input><span v-if="errors.address"> {{ errors.address }} </span>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput">Email</label>
        <b-form-input type="text" v-model="form.email" class="form-control" placeholder="Email"></b-form-input><span v-if="errors.email"> {{ errors.email }} </span>
      </b-form-group>
      <b-form-group>
        <label for="formGroupExampleInput">Phone</label>
        <vue-tel-input type="text" v-model="form.phone" class="form-control" Number placeholder="Phone"></vue-tel-input><span v-if="errors.phone"> {{ errors.phone }} </span>
      </b-form-group>

    </div>

    <button class="btn btn-primary" @click="editLecturer()">Submit</button>




</b-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LecturerCreate',
  components: {},
  data() {
    return {
      form: {
        name: "",
        address: "",
        email: "",
        phone: "",
      },
      lecturer: [],
      errors: {}
    }
  },
  mounted() {

    this.id = this.$route.params.id

  },
  methods: {
    editLecturer() {
      let token = localStorage.getItem('token');


      axios.put('https://college-api-scott.herokuapp.com/api/lecturers/' + this.$route.params.id,{
        name: this.form.name,
        address: this.form.address,
        email: this.form.email,
        phone: this.form.phone,
        }, {
          headers: {  Authorization: "Bearer " + token}
        })
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: 'lecturers_index' });
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
