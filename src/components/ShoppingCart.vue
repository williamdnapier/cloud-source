<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">CLOUD SOURCE</a>
      </div>
    </div>
    <div class="row">
      <div class="col mt-2">
        <h2 class="text-center">Your Cart</h2>
        <table class="table table-bordered table-striped p-2">
          <thead>
          <tr>
            <th>Quantity</th><th>Product</th>
            <th class="text-right">Price</th>
            <th class="text-right">Subtotal</th>
          </tr>
          </thead>
          <tbody>
          <!--Messaging which is displayed if no items added to card.-->
          <tr v-if="lines.length == 0">
            <td colspan="4" class="text-center">
              Your cart is empty
            </td>
          </tr>
          <!--
          This component handles its child component like this ...
          It uses a cart-line element to apply the CartLine directive. The component relies on this parent-child relationship.
          The v-bind directive is used to set the value of the line prop. By setting this prop the CartLine receives the
          object it displays. The v-on directive is used to receive the custom events emitted by the CartLine directive.
          -->
          <cart-line v-for="line in lines" v-bind:key="line.resource.id"
                     v-bind:line="line"
                     v-on:quantity="handleQuantityChange(line, $event)"
                     v-on:remove="remove" />
          </tbody>
          <tfoot v-if="lines.length > 0">
          <tr>
            <td colspan="3" class="text-right">Total:</td>
            <td class="text-right">
              {{ totalPrice | currency }}
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="text-center">
          <!--This router-link element is provided by the Vue Router package and it is used to generate a
          navigation element. When the component's template is processed, the router-link element is replaced
          with an <a href=''> element. This element will navigate to the URL specified in the 'to' attribute.-->
          <router-link to="/" class="btn btn-secondary m-1">
            Continue Shopping
          </router-link>
          <!--Bootstrap styling can make these a elements look like buttons. So, we add classes like:
          'btn btn-secondary m-1' or 'btn btn-primary m-1' to make that happen.-->
          <router-link to="/checkout" class="btn btn-primary m-1"
                       v-bind:disabled="lines.length == 0">
            Checkout
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapGetters } from "vuex";
import CartLine from "./ShoppingCartLine";

export default {
  components: { CartLine },
  computed: {
    //Another thing to notice here is the use of the data store state property. The features used by the shopping cart
    //were defined in a data module separate from the rest of the data store. See the cart.js file.
    //Because they are defined separately we have to use a prefix in the ...mapState. We use 'state.cart.lines'.
    ...mapState({ lines: state => state.cart.lines }),
    //State properties are mapped by defining a function that receives the state object. That function then selects the
    //property that is required. In this example, the selected property is lines which is accessed by using the cart prefix.
    ...mapGetters({  totalPrice : "cart/totalPrice"  })
  },
  methods: {
    ...mapMutations({
      change: "cart/changeQuantity",
      remove: "cart/removeProduct"
    }),
    handleQuantityChange(line, $event) {
      this.change({ line, quantity: $event});
    }
  }
}
</script>