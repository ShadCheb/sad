<template>
  <div :class="[$style.cart, className]">
    <div :class="$style.cartImg">
      <img v-lazy="product.photo" :alt="product.title" />
    </div>
    <div :class="$style.cartDescription">
      <div :class="$style.cartHeader">
        <p :class="$style.cartName">
          {{ product.title }}
        </p>
      </div>
      <div :class="$style.cartBtns">
        <p :class="$style.cartPrice">
          {{ product.price }}
        </p>
        <button
          class="btn-3 btn-3_border btn-3_grey"
          @click="onShowDescription(product)"
        >
          Описание
        </button>
        <button class="btn-3 btn-3_border" @click="onOrder">Заказать</button>
        <button class="btn-3" @click="onAddToCart">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CatalogModalItem',
  props: {
    className: String,
    product: Object,
    onShowDescription: Function,
    onClose: Function,
  },
  methods: {
    ...mapActions({
      addProduct: 'cart/addProduct',
      changeVisibleCart: 'cart/changeVisibleMenu',
    }),
    onAddToCart() {
      this.addProduct(this.product);
    },
    onOrder() {
      this.addProduct(this.product);
      this.onClose();
      this.changeVisibleCart();
    },
  },
};
</script>

<style lang="less" module>
@import url('./CatalogModalItem.less');
</style>
