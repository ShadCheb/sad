<template>
  <div :class="$style.catalog" id="catalog">
    <div :class="$style.catalogContainer">
      <h2 class="title-h2">Каталог</h2>

      <div :class="$style.catalogBlocks">
        <CatalogRow
          v-for="categorie in categories"
          :key="categorie.id"
          :styleName="$style.catalogRow"
          :isMore="moreData[categorie.id] || categorie.products.length < 9"
          :categorie="categorie"
          :onMore="onMore"
          :onOpenDescription="onOpenDescription"
        />
      </div>
    </div>

    <a-modal
      v-model="isVisibleDescription"
      title=""
      :footer="null"
      class="modal"
      :width="width"
      @cancel="onCloseDescription"
    >
      <div v-if="activeProduct" :class="$style.descriptionModal">
        <h2 :class="$style.descriptionModalTitle">
          {{ activeProduct.title }}
        </h2>
        <p :class="$style.descriptionModalText">
          {{ activeProduct.description }}
        </p>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const WIDTH = 960;

export default {
  name: 'Catalog',
  components: {
    CatalogRow: () => import('./CatalogRow/CatalogRow'),
  },
  data() {
    return {
      width: WIDTH,
      isVisible: false,
      activeCategory: null,
      moreData: {}, // ОБъект с открытыми Посмотреть еще
      isVisibleDescription: false,
      activeProduct: null,
    };
  },
  computed: {
    ...mapState({
      categories: (state) => state.categoriesList,
    }),
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    // ...mapActions({
    //   getProducts: 'getProducts',
    // }),
    onMore(id) {
      this.moreData = {
        ...this.moreData,
        [id]: true,
      }
    },

    onCloseDescription() {
      this.isVisibleDescription = false;
      this.activeProduct = null;
    },
    onOpenDescription(product) {
      this.activeProduct = product;
      this.isVisibleDescription = true;
    },
    getDimensions() {
      const width = document.documentElement.clientWidth;

      this.width = width >= 960 ? WIDTH : '100%';
    },
  },
};
</script>

<style lang="less" module>
@import url('./Catalog.less');
</style>
