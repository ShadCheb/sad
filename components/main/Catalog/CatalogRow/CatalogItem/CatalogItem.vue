<template>
  <div
    :class="[$style.catalogItemBlock, styleName]"   
  >
    <div>
      <div :class="$style.catalogItemImage">
        <img v-lazy="data.thumb_photo" :alt="data.title" />
      </div>
      <div :class="$style.catalogItemFooter">
        <h2 :class="$style.catalogItemName">
          {{ data.title || '' }}
        </h2>

        <div :class="$style.catalogItemBtns">
          <p :class="$style.catalogItemPrice">
            {{ data.price.text }}
          </p>
          
          <button
            class="btn-3 btn-3_border"
            @click="onOpenDescription(data)"
          >
            Описание
          </button>
          <button
            class="btn-3"
            @click="onAddToCart"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CatalogItem',
  props: {
    styleName: String,
    data: Object,
    onOpenDescription: Function,
  },
  methods: {
    ...mapActions({
      addProduct: 'cart/addProduct',
    }),
    onAddToCart() {
      this.addProduct(this.data);
    },
  }
};
</script>

<style lang="less" module>
@import url('./CatalogItem.less');
</style>
