import TodoItem from '../components/TodoList/TodoItem.vue';


export default {
  title: 'Cortex/TodoList/TodoItem',
  component: TodoItem,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoItem },
  template: '<todo-item @onTodoCompleted="onTodoCompleted" v-bind="$props" ></todo-item>',
});



export const Completed = Template.bind({});
Completed.args = {
  todo:{
    userId: 4,
    id: 68,
    title: "aut id perspiciatis voluptatem iusto",
    completed: true,
  }
};

export const UnCompleted = Template.bind({});
UnCompleted.args = {
  todo:{
    userId: 4,
    id: 67,
    title: "aut id perspiciatis voluptatem iusto",
    completed: false,
  }
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
