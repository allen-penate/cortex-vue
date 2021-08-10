<template>
    <v-sheet>
        <todo-list :todos="todos" @onTodoCompleted="onTodoCompleted"></todo-list>
    </v-sheet>
</template>
<script>
import axios from "axios";
import TodoList from './TodoList';


export default {
    name: "TodoBox",
    props:{
        user:{
            type: Object,
            required: false,
            default(){
                return { id: 4 }
            }
        },
        url: {
            type: String,
            default: "https://jsonplaceholder.typicode.com/todos"
        }
    },
    components:{
        TodoList
    },
    data(){
        return {
            todos: []
        }
    },
    mounted(){
        this.fetch();
    },
    watch:{
        todos(_new, _old){
            console.log("***TodoBox***", _new, _old);
        }
    },
    methods:{
        async fetch(){
            try{
                const {data} = await axios.get(this.url,{
                    params:{
                        userId: this.user.id
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }});
                this.todos = data;    
            }catch(error){
                console.log("Error", error);
            }
        },

        //Event Handlers
        onTodoCompleted(todoId){
            let todo = this.todos.find((todo)=>(todo.id === todoId));
            if(todo){
                todo.completed = !todo.completed;
            }
            this.update(todo);
        },


        // async create(todo){
            
        // },

        async update(todo){
            try{
                await axios.put(`${this.url}/${todo.id}`,{
                    data: todo,
                    headers: {
                        'Content-Type': 'application/json'
                    }});  
            }catch(error){
                console.log("Error", error);
            }
        },

        // async delete(todo){

        // }



    }
}
</script>