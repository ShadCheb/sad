<template>
  <div :class="$style.header">
    <div :class="$style.headerContainer">
      <div :class="$style.headerButtons">
        <a
          :class="[$style.headerButton, $style.headerButtonGreen]"
          @click="changeVisibleCart"
        >
          <div :class="$style.headerButtonIcon">
            <img :src="require('~/assets/img/cart.png')" alt="Корзина" />
            <div v-if="numProducts" :class="$style.headerNum">
              {{ numProducts }}
            </div>
          </div>
        </a>
        <a :class="$style.headerButton" @click="changeVisibleMenu">
          <div :class="$style.headerButtonIcon">
            <img :src="require('~/assets/img/menu.png')" alt="Меню" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import sprite from '~/assets/svg/sprite.svg?sprite';

export default {
  data() {
    return { sprite };
  },
  computed: {
    ...mapState({
      visible: (state) => state.cart.visible,
      products: (state) => state.cart.products,
    }),
    numProducts() {
      if (!this.products?.length) return '';

      return this.products.length > 9 ? '>9' : String(this.products.length);
    },
  },
  methods: {
    ...mapActions({
      changeVisibleMenu: 'menu/changeVisibleMenu',
      changeVisibleCart: 'cart/changeVisibleMenu',
    }),
  },
};
</script>

<style lang="less" module>
@import url('./Header.less');
</style>
