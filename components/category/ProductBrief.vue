<template>
  <div :class="$style.wrapper">
    <nuxt-link :to="`/product/${product.pSlug}`">
      <p>{{ product.pName }}</p>
      <img
        v-lazy="product.image"
        :class="$style.image"
      >
    </nuxt-link>
    <p>Цена {{ product.pPrice }}</p>
    <BuyButton
      :product="product"
    />
  </div>
</template>

<script>
import BuyButton from '~~/components/common/Button/BuyButton.vue'

export default {
  components: {
    BuyButton,
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" module>
  @import url('./ProductBrief.less');
</style>