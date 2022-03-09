import vueRouter from "storybook-vue3-router";
import TheHeader from "./TheHeader.vue";

export default {
  title: "TheHeader",
  component: TheHeader
};

const Template = (args) => ({
  components: { TheHeader },

  setup() {
    return { args };
  },

  template: '<TheHeader v-bind="args" />',
});

export const Default = Template.bind({});

Default.decorators = [
  vueRouter(),
];
