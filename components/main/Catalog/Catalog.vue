<template>
  <div :class="$style.catalog" id="catalog">
    <div :class="$style.catalogContainer">
      <h2 class="title-h2">Каталог</h2>

      <div :class="$style.catalogBlocks">
        <CatalogItem
          v-for="categorie in categories"
          :key="categorie.id"
          :styleName="$style.catalogItem"
          :data="categorie"
          :onOpenDescription="onOpenDescription"
        />
      </div>
    </div>

    <CatalogModal
      :isVisible="isVisible"
      :activeCategory="activeCategory"
      :onClose="onCloseDescription"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    CatalogItem: () => import('./CatalogItem/CatalogItem'),
    CatalogModal: () => import('~/components/common/CatalogModal/CatalogModal'),
  },
  data() {
    return {
      isVisible: false,
      activeCategory: null,
    };
  },
  computed: {
    ...mapState({
      categories: (state) => state.categoriesList,
    }),
  },
  methods: {
    ...mapActions({
      getProducts: 'getProducts',
    }),
    onCloseDescription() {
      this.activeCategory = undefined;
      this.isVisible = false;
    },
    onOpenDescription(item) {
      this.activeCategory = item;
      this.isVisible = true;
      this.getProducts({ albumId: item.id });
    },
  },
};
</script>

<style lang="less" module>
@import url('./Catalog.less');
</style>
