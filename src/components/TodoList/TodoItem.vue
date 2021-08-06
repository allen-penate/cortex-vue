<template>
  <v-list-item :value="todo.id" :input-value="isCompleted" active-class="deep-purple--text text--accent-4" @change="onCompleted">
    <template v-slot:default="{active}">
      <v-list-item-action>
        <v-checkbox
          :input-value="active"
          color="deep-purple accent-4"
        ></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="todo.title"></v-list-item-title>
      </v-list-item-content>
    </template>
  </v-list-item>
</template>
<script>
// import { defineComponent, reactive } from "@vue/composition-api";

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      default: () => ({
        userId: 4,
        id: 68,
        title: "aut id perspiciatis voluptatem iusto",
        completed: false,
      }),
    },
  },
  computed: {
      isCompleted(){
          return this.todo.completed;
      }
  },
  methods: {
    onCompleted() {
      if(!this.isCompleted){
        this.$emit("todo-completed", this.todo.id);
      }
    },
  },
  emits: ["todo-completed"],
};
</script>
