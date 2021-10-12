<template>
  <div>
    <div v-for="r in resources" v-bind:key="r.id" class="card m-1 p-1 bg-light">
      <h4>{{r.name}}
        <span class="badge badge-pill badge-primary float-right">{{ r.price | currency }}</span>
      </h4>
      <div class="card-text bg-white p-1">{{ r.description }}</div>
      <!--Add a button which will allow the user to add resources to the cart. This button
      which is added to each resource listing will update the cart if clicked. -->
      <button class='btn btn-success btn-sm float-right' v-on:click='handleResourceAdd(r)'>
        Add To Cart
      </button>
    </div>
    <page-controls />
  </div>
</template>

<script>
/*
This ResourceList component will display a list of Azure Virtual Machines to the user.
This script element imports the mapState function from the vuex package.
mapState is used to provide access to the data in the store.
 */

/*
Need both mapGetters (to get data) and mapMutations (to create new state mutation).
 */
import { mapGetters, mapMutations } from "vuex";
import PageControls from "./PageControls";

export default {
  components: { PageControls },
  computed: {
    ...mapGetters({ resources: "processedresources" })
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US",
          { style: "currency", currency: "USD" }).format(value);
    }
  },
  methods: {
    /*
    Above in the template the button element uses the v-on directive to respond to the click event
    by invoking the handleResourceAdd method which is registered as a method in this block.
    This method invokes the cart/addResource mutation on the data store. After the addResource
    mutation has been invoked, the handleResourceAdd method uses the routing system to navigate
    to the /cart URL by using this.$router.push('/cart');
     */
    ...mapMutations( { addResource: 'cart/addResource' }),
    handleResourceAdd(resource) {
      this.addResource(resource);
      /*
      The functionality provided by the Vue Router package is provided to components using the $router
      keyword. To access all the properties and methods in a component requires using the this keyword.
      The push method tells the router to change the browser's URL, which appears to display a new page.
      The result is that the cart component is displayed when you click one of the Add To Cart buttons.
       */
      this.$router.push('/cart');
    }
  }
}
</script>