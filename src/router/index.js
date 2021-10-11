import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '../components/Store';
import ShoppingCart from '../components/ShoppingCart';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Store },
        { path: '/cart', component: ShoppingCart },
        { path: '*', redirect: '/' }
    ]
})

/*
In order to allow the user to navigate between the list of resources and the shopping cart.
Vue has a feature called dynamic components. This will allow the application to change
the content or view which the user will see. This feature is part of Vue Router. So, to
set up routing, we've created the src/router/index.js file.

In this file, the Vue Router must be registered first using Vue.use the same way you
have to register the Vuex package.

This index.js file exports a new VueRouter object. This object is passed a configuration
object which sets up the mapping between the URLs and the associated components.

When the VueRouter is instantiated it also includes optional properties. The first
property, mode, is set to history which tells the VueRouter to use a recent browser
API to handle URLs. This feature isn't supported by old browsers - but we don't care
about them, lol.

The routes property contains a set of objects which map URLs to components so that the
default URL for the application will display the Store component, while the /cart URL
will display the ShoppingCart component. The third object in the routes array is a
wildcard route which redirects any unmatched URL back to the root.
 */
