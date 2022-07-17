<template>
  <div
    :class="[$style.catalogItemBlock, styleName]"
    @click="onOpenDescription(data)"
  >
    <div>
      <div :class="$style.catalogItemImage">
        <img v-lazy="data.photo" :alt="data.title" />
      </div>
      <div :class="$style.catalogItemFooter">
        <h2 :class="$style.catalogItemName">
          {{ data.title || '' }}
        </h2>
        <p :class="$style.catalogItemButton">Подробнее</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    styleName: String,
    data: Object,
    onOpenDescription: Function,
  },
};
</script>

<style lang="less" module>
@import url('./CatalogItem.less');
</style>
