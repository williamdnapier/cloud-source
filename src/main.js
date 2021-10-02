import Vue from 'vue'
import App from './App.vue'
/*
Adding the bootstrap and font-awesome packages for use in the application.
Using import statements to grab the min.css files which were added via mpm install.
i.e.
npm install bootstrap@4.0.0
npm install font-awesome@4.7.0
 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import store from './store'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
