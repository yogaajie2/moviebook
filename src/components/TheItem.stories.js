import TheItem from "./TheItem.vue";

export default {
  title: "TheItem",
  component: TheItem
};

const Template = (args) => ({
  components: { TheItem },

  setup() {
    return { args };
  },

  template: '<TheItem v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  item: {
    id: "1",
    poster_path: "1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    vote_average: 6.9,
    title: "Item Title",
    release_date: "2022-08-03",
  },
};
