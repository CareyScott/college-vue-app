<!--
@Date:   2021-03-30T22:01:55+01:00
@Last modified time: 2021-04-07T14:55:34+01:00
-->



<template>
<div>
  <MyNavBar />
  <b-container>
    <b-row>
      <router-view />
    </b-row>
  </b-container>
</div>
</template>

<script>
import MyNavBar from './components/MyNavBar.vue'

export default {
  name: 'App',
  components: {
    MyNavBar
  }
}
</script>

<style>

</style>
