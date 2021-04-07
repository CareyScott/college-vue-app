<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-03-30T22:49:42+01:00
-->



<template>
  <div id="testing">
    <!-- <img alt="Vue logo" src="src/assets/logo.png"> -->
THis is the testing page for {{ $route.params.id}}
<!-- THis is the testing page for {{ $route.params.myparam}} -->
 <!-- {{ $route.params.second}} -->
</div>
</template>

<script>

export default {
  name: 'testing',
  components: {

  },
  data(){
    return {

    }
  },
  mounted(){
this.id = this.$route.params.id
  },
  methods: {

  }
}
</script>

<style>
.testing{
  text-align: center;
}
</style>
