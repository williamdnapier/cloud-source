<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">CloudSource</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 p-2">
        <TagControls />
      </div>
      <div class="col-9 p-2">
        <ResourceList />
      </div>
    </div>
  </div>
</template>

<script>

import ResourceList from "./ResourceList";
import TagControls from "./TagControls";

export default {
  components: { ResourceList, TagControls }
}

</script>