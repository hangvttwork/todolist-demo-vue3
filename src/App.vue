<template>
  <div>
    <h1>Hello, I'm Hang Vu</h1>

    <h3>Todo list</h3>
    <button @click="addNewTodo()">Create a new todo</button>

    <div>
      <div v-for="(list, index) in newTodoList" :key="index">
        <label>Time: </label>
        <input type="text" v-model="list.time" />
        <button @click="addNewTask(index)">Add task</button>

        <div>
          <div v-for="(tasks, index) in list.tasks" :key="index">
            <input type="text" v-model="list.tasks[index]" />
          </div>
        </div>

        <button @click="saveTodo(index)">Save Todo</button>
      </div>
      <h3>{{ saveMessage }}</h3>
    </div>

    <button @click="fetchAllTodoList()">Fetch all saved Todolist</button>
    <h3>{{ fetchMessage }}</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createNewTodoList, fetchAllTodo } from "@/firebaseConfig";

const newTodoList = ref([]);

const saveMessage = ref("");
const fetchMessage = ref("");

const addNewTodo = () => {
  newTodoList.value.push({
    time: "",
    tasks: [],
  });
};

const addNewTask = (index) => {
  newTodoList.value[index].tasks.push("");
};

const saveTodo = async (index) => {
  await createNewTodoList(newTodoList.value[index]);
  newTodoList.value.pop();
  saveMessage.value = "Save successfully!";
};

const fetchAllTodoList = async () => {
  await fetchAllTodo();
  fetchMessage.value = "Due to time limited, please see result in console log. Thanks";
};
</script>
