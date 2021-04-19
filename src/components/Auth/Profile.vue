
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-19T00:32:26+01:00


<template>
<b-container class="courses">

  <b-row>
    <!-- <div class="col g-0 mt-3 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative "> -->
    <b-col class=" mb-4">
      <b-card class="bg-dark text-light" title="My Profile">
        <b-col class="text-dark">
          <b-img class="col-3 mt-5" rounded="" src="https://picsum.photos/200" />
        </b-col>
      </b-card>
      <b-card class="bg-light">

        <b-card class="bg-light mr-5 ml-5" title="About">
          <b-row class="text-dark">
            <b-row class="ml-3">

              <b-col class="text-dark col">
                <h6>Profile Name</h6>
                <h6>Profile Email</h6>
                <b-row class="ml-0">
                  <h6>Profile View Password</h6>
                  <b-form-checkbox-group v-model="value" :options="showPassword" :state="state" class="ml-3" name="checkbox-validation">
                    <b-form-valid-feedback :state="state">
                      <h6>ThisIsYourPassword</h6>
                    </b-form-valid-feedback>
                  </b-form-checkbox-group>
                </b-row>

              </b-col>


            </b-row>

            <!-- <b-row>

                <b-col class="text-dark col">

                </b-col>

              </b-row> -->

          </b-row>
        </b-card>

      </b-card>
    </b-col>
  </b-row>
  <b-row>



  </b-row>

</b-container>
</template>
<style>


</style>
<script>
import axios from 'axios';


// const COURSE_ID = $route.params.id;

export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      user: [],
      value: [],

      showPassword: [{
          text: 'Click To View',
          value: 'first'
        },

      ],
    }
  },
  computed: {
    state() {
      return this.value.length === 1
    }
  },

  mounted() {


    let token = localStorage.getItem('token');
    axios.get('https://college-api-scott.herokuapp.com/api/user', {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.user = response.data.data;


        this.$notify({
          group: 'foo',
          title: 'Important message',
          text: 'Profile Loaded',
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
      })


  },
  methods: {


  },

}
</script>

<style>

</style>
