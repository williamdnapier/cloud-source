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
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
}
</script>

/*
To run this app:

1. Open a terminal session and enter:
npm run json
This starts json-server.

2. Open another terminal session and enter:
npm run serve
This will run our Vue.js UI.
*/
