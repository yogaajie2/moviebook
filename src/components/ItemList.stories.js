import ItemList from "./ItemList.vue";
import * as TheItemStories from './TheItem.stories';

export default {
  title: "ItemList",
  component: ItemList
};

const Template = (args) => ({
  components: { ItemList },

  setup() {
    return { args };
  },

  template: '<ItemList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: "List Name",

  items: {
    results: [
      { 
        ...TheItemStories.Default.args.item,
        id: "1",
        poster_path: "1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        vote_average: 6.9,
        title: "Item Title",
        release_date: "2022-08-03",
      },

      {
        ...TheItemStories.Default.args.item,
        id: "2",
        poster_path: "1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        vote_average: 6.9,
        title: "Item Title",
        release_date: "2022-08-03",
      },

      {
        ...TheItemStories.Default.args.item,
        id: "3",
        poster_path: "1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        vote_average: 6.9,
        title: "Item Title",
        release_date: "2022-08-03",
      },
    ],
  },
};
