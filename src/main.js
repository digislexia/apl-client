import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:4000',
  /* the magic */
  clientState: {
    defaults: {
      uiColorPalette: 'light',
    },
    resolvers: {},
    typeDefs: `
      type Query {
        uiColorPalette: String
      }
    `,
  },
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
