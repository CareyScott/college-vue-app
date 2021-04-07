<!--
@Date:   2021-02-16T10:12:40+00:00
@Last modified time: 2021-02-18T12:20:18+00:00
-->
<!--
@Date:   2021-02-16T09:32:25+00:00
@Last modified time: 2021-02-18T12:20:18+00:00
-->



<template>

  <b-list-group-item>
    <span v-if="todo.done" class="done"> {{todo.text}}</span>
    <span v-else> {{todo.text}}</span>
    <span v-if="todo.done" class="float-right">&#128077;</span>
    <b-button v-else class="float-right" pill variant ="outline-success"
      @click="completeTodo(todo)">&#10003;</b-button>
      <b-button class="float-right" variant="outline-danger" @click="deleteTodo(todo)">&#10060;</b-button>


  </b-list-group-item>

</template>

<script>

export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods:{
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    },

    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
