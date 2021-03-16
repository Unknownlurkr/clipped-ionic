<template>
  <div id="test-area-container">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <CartList />
        </div>
        <div class="column is-9">
          <ProductList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from './cart/CartList';
import ProductList from './product/ProductListItem'

export default {
  name: 'TestArea',
  components: {
    CartList,
    ProductList
  }
};
</script>

<style>
html,
body {
  background: #f2f6fa;
}

#test-area-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 769px) {
  html,
  body {
    height: 100%;
  }
}
</style>
