import TodoList from '../components/TodoList/TodoList.vue';
import * as TodoItemStories from './TodoItem.stories';


export default {
    title: 'Cortex/TodoList/TodoList',
    component: TodoList,
    argTypes: {

    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { TodoList },
    template: '<todo-list @onTodoCompleted="onTodoCompleted" v-bind="$props" ></todo-list>',
});


export const WithData = Template.bind({});
WithData.args = {
  todos:[
      {...TodoItemStories.Completed.args.todo,id:45},
      {...TodoItemStories.Completed.args.todo, completed: false},
]
};
