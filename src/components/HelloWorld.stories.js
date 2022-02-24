import HelloWorld from './HelloWorld.vue';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
};

const Template = (args) => ({
  components: { HelloWorld },

  setup() {
    return { args };
  },

  template: '<HelloWorld v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  msg: 'Hello World!'
};
