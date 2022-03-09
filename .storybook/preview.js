import { app } from '@storybook/vue3';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '../src/assets/tailwind.css';

library.add(faBars, faMagnifyingGlass, faStar);

app.component('font-awesome-icon', FontAwesomeIcon);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
