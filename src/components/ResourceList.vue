<template>
  <div>
    <div v-for="r in resources" v-bind:key="r.id" class="card m-1 p-1 bg-light">
      <h4>{{r.name}}
        <span class="badge badge-pill badge-primary float-right">{{ r.price | currency }}</span>
      </h4>
      <div class="card-text bg-white p-1">{{ r.description }}</div>
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

import { mapGetters} from "vuex";
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
  }
}
</script>