import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import store from './store';
import router from './router'

Vue.config.productionTip = false;

//Creating a global filter
//Currently, we have a currency filer defined in the ResourceList.vue component.
//Now that we have added more features to the project, there are values in different components which will need to be
//formatted as currency. So, in this main.js file, we can add a global currency filter. This way we can register it
//to be used by all components.
Vue.filter('currency', (value) =>
    new Intl.NumberFormat('en-US',
        {style: 'currency', currency: 'USD'}
        ).format(value)
);

//Many component features can be defined globally to avoid code duplication.
//Global filters are defined using the Vue.filter method. This method must be called before the Vue object is created.

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

/*
Adding the bootstrap and font-awesome packages for use in the application.
Using import statements to grab the min.css files which were added via mpm install.
i.e.
npm install bootstrap@4.0.0
npm install font-awesome@4.7.0
 */