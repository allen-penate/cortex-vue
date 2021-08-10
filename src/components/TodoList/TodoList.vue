<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list shaped>
      <v-list-item-group
        v-model="completed"
        multiple
      >
        <template v-for="todo in todos">
          <v-divider
            v-if="!todo"
            :key="`divider-${todo.id}`"
          ></v-divider>
          <TodoItem :todo=todo :key="`item-${todo.id}`" @onTodoCompleted="onTodoCompleted"></TodoItem>

        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: "TodoList",
  props: {
    todos: {
        type: Array,
        default(){
          return   [
        {
          userId: 4,
          id: 64,
          title: "voluptas consequatur qui ut quia magnam nemo esse",
          completed: false,
        },
        {
          userId: 4,
          id: 65,
          title: "fugiat pariatur ratione ut asperiores necessitatibus magni",
          completed: true,
        },
        {
          userId: 4,
          id: 66,
          title: "rerum eum molestias autem voluptatum sit optio",
          completed: false,
        },]          
        }
    },
  },
  components: { TodoItem },
  emits:['onTodoCompleted'],
  computed:{
    completed: {
      get(){
        return this.todos.filter((todo)=>(todo.completed)).map(todo=>todo.id);
      },
      set(newValue){
        console.log(newValue);
      }
    },
  },
  methods:{
    onTodoCompleted(todoId){
      this.$emit("onTodoCompleted", todoId)
    }
  }
};
</script>
