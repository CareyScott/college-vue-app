<!--
@Date:   2021-03-30T22:15:57+01:00
@Last modified time: 2021-04-07T15:29:25+01:00
-->



<template>
<b-col class="courses">
  <h2>These are the courses Listed in the database</h2>
  <div class="course-list">
    <h2 class="course-title">Creative Computing</h2>
    <TodoList />
  </div>
</b-col>
</template>

<script>
import TodoList from '@/components/courses/creativecomputing/vuedo/TodoList'

export default {
  name: 'Courses',
  components: {
    TodoList
  }
}
</script>


<style>

.course-list{
  margin-top: 30px;
}
.course-title{
  margin-bottom:  15px;
}

</style>
