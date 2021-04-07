<!--
@Date:   2021-02-16T09:46:19+00:00
@Last modified time: 2021-02-18T12:22:40+00:00
-->



<template>
<div>
  <b-card header="TodoList" header-tag="header">

    <b-list-group>
      <TodoItem v-on:complete-todo="completeTodo" v-for="item in list" :todo="item" :key="item.id" v-on:delete-todo="deleteTodo"/>

    </b-list-group>

    <template v-slot:footer>
      <input type="text" v-model="todo" v-on:keyup.enter="addNewTodo()" />
      <b-button class="float-right" variant="primary" @click="addNewTodo"> Add </b-button>
    </template>
  </b-card>
  <!-- <ol>
    <li>ToDo 1</li>
    <li>ToDo 2</li>
    <li>ToDo 3</li>
  </ol> -->
</div>
</template>

<script>
import TodoItem from "./TodoItem"

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data() {
    return {
      list: [{
          id: 1,
          text: "Clean the house",
          done: true
        },

        {
          id: 2,
          text: "Buy Milk",
          done: false
        },

        {
          id: 3,
          text: "Create Todo app",
          done: false
        }

      ],
      todo: ""
    }
  },
  methods: {
    addNewTodo() {
      if (!this.todo) {
        alert("Please enter a Todo!");
        return;
      }

      const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;

      this.list.push({
        id: newId,
        text: this.todo,
        done: false
      });

      this.todo = "";
    },
    completeTodo(todo) {
      const todoIndex = this.list.indexOf(todo);

      this.list[todoIndex].done = true;
    },

    deleteTodo(todo){
      const todoIndex = this.list.indexOf(todo);
      this.list.splice(todoIndex, 1)
    }

  }
};
</script>

<style>
</style>
