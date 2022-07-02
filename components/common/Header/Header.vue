<template>
  <div :class="$style.header">
    <div :class="$style.body">
      <a :class="[$style.button, $style.buttonGreen]">
        <svg>
          <use href="~/assets/svg/sprite.svg#cart" />
        </svg>
        <div v-if="numFilterOfGoods" :class="$style.num">
          {{ numFilterOfGoods }}
        </div>
      </a>
      <a :class="$style.button">
        <svg>
          <use href="~/assets/svg/sprite.svg#vk" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    numFilterOfGoods() {
      return this.numberOfGoods > 9 ? '>9' : '' + this.numberOfGoods;
    },
  },
};
</script>

<style lang="less" module>
@import url('./Header.less');
</style>
