import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {task: "Shopping", priority:"low"},
        {task: "Clean House", priotity:"high"},
        {task: "Car's MOT", priotity:"high"}
      ],
      newTask: "",
      newPriority: ""
    },
    methods: {
      saveNewTask: function (){
        this.todos.push({task: this.newTask, priority: this.newPriority});
        this.newTask = ""
      }
    }
  });
});
