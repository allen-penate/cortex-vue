import Vue from 'vue'
import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify' // <== important


Vue.use(Vuetify);

Vue.config.productionTip = false

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// wrap all stories in `v-app`
export const decorators = [(story, context) => {
  const wrapped = story(context);
  return Vue.extend({
    vuetify,
    components: { wrapped },
    template: '<v-app><v-main><wrapped /></v-main></v-app>'
  });
  
}]

// app.use(vuetify)