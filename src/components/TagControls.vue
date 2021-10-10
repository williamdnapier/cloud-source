<template>
  <div class='container-fluid'>
    <div class='row my-2'
         v-for='t in tags' v-bind:key='t'>
      <button class="btn btn-block"
              v-on:click="setCurrentTag(t)"
              v-bind:class="t == currentTag ? 'btn-primary' : 'btn-secondary'">
        {{ t }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState(['currentTag']),
    ...mapGetters(['tags'])
  },
  methods: {
    ...mapMutations(['setCurrentTag'])
  }
}
</script>