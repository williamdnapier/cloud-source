<template>
  <store />
</template>

<script>
/*
To run this app:

1. Open a terminal session and enter:
npm run json
This will start the json-server to act as our backend RESTful service.

2. Open another terminal session and enter:
npm run serve
This will run our Vue.js UI.
*/

import Store from "./components/Store";
import { mapActions } from "vuex";

export default {
  name: 'app',
  components: { Store },
  methods: {
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
}
</script>
