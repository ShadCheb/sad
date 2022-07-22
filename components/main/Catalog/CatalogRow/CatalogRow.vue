<template>
  <div
    v-if="categorie.products"
    :class="[$style.catalogRow, styleName]"
  >
    <h2 :class="$style.catalogRowTitle">
      {{ categorie.title || '' }}
    </h2>
    <div :class="$style.catalogRowBody">
      <CatalogItem
        v-for="product in showProducts"
        :key="product.id"
        :styleName="$style.catalogRowItem"
        :data="product"
        :onOpenDescription="onOpenDescription"
      />
    </div>

    <div v-if="!isMore" :class="$style.catalogRowBtn">
      <button class="btn-2" @click="onMore(categorie.id)">
        Показать еще
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogRow',
  components: {
    CatalogItem: () => import('./CatalogItem/CatalogItem'),
  },
  props: {
    styleName: String,
    categorie: Object,
    isMore: Boolean,
    onMore: Function,
    onOpenDescription: Function,
  },
  computed: {
    showProducts() {
      return this.isMore ? this.categorie.products.slice() : this.categorie.products.slice(0, 8);
    }
  }
};
</script>

<style lang="less" module>
@import url('./CatalogRow.less');
</style>
