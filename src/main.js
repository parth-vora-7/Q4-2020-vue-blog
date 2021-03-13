import Vue from 'vue'
import App from './App.vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import PageNotFound from './pages/PostDetail'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graphql'
})

Vue.config.productionTip = false

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
