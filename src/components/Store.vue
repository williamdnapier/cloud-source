<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">CloudSource</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 p-2">
        <CategoryControls />
      </div>
      <div class="col-9 p-2">
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>

import ProductList from "./ProductList";
import CategoryControls from "./CategoryControls";

export default {
  components: { ProductList, CategoryControls }
}

</script>