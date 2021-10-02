<template>
  <div>
    <div v-for="p in products" v-bind:key="p.id" class="card m-1 p-1 bg-light">
      <h4>{{p.name}}
        <span class="badge badge-pill badge-primary float-right">{{ p.price | currency }}</span>
      </h4>
      <div class="card-text bg-white p-1">{{ p.description }}</div>
    </div>
    <page-controls />
  </div>
</template>

<script>

/*
This ProductList component will display a list of Azure Virtual Machines to the user.
This script element imports the mapState function from the vuex package. mapState is used to provide access to the data in the store.


 */

import { mapGetters} from "vuex";
import PageControls from "./PageControls";

export default {
  components: { PageControls },
  computed: {
    ...mapGetters({ products: "processedProducts" })
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US",
          { style: "currency", currency: "USD" }).format(value);
    }
  }
}
</script>