<!--
@Date:   2021-04-07T16:53:04+01:00
@Last modified time: 2021-04-07T18:01:19+01:00
-->
<template>
<b-col class="courses">
    <h2 class="course-title">Login</h2>
    <Login/>
</b-col>
</template>
<script>
import Login from '@/components/Auth/Login'

export default {
  name: 'Auth',
  components: {
    Login
  }
}
</script>


<style>
.course-list {
  margin-top: 30px;
}

.course-title {
  margin-bottom: 15px;
}
</style>
