<template>
  <router-view />
</template>

<script>
//import Store from "./components/Store";
import { mapActions } from "vuex";

export default {
  name: 'app',
  //components: { Store },
  methods: {
    ...mapActions({
      getData: "getData",
      initializeCart: "cart/initializeCart"
    })
  },
  created() {
    this.getData();
    this.initializeCart(this.$store);
  }
}
</script>
