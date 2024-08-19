import MyButton from '../components/MyButton.vue';

export default {
  title: 'MyButton',
  component: MyButton,
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  // Props here
};
