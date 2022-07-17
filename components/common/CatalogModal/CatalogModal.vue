<template>
  <div>
    <a-modal
      v-model="isVisible"
      title=""
      :footer="null"
      class="modal"
      :width="width"
      @cancel="onClose"
    >
      <div :class="$style.catalogModal">
        <div :class="$style.catalogModalTitle">
          <h2 v-if="!loading && activeCategory">
            {{ activeCategory.title }}
          </h2>
          <p v-if="!loading && activeCategory">
            {{ activeCategory.title }}
          </p>
        </div>
        <div v-if="!loading" :class="$style.catalogModalCarts">
          <CatalogModalItem
            v-for="product in products"
            :key="product.id"
            :product="product"
            :className="$style.catalogModalCartItem"
            :onShowDescription="onOpenDescription"
            :onClose="onClose"
          />
        </div>
        <div v-else :class="$style.catalogModalLoading">
          <a-spin size="large" />
        </div>
      </div>
    </a-modal>

    <a-modal
      v-model="isVisibleDescription"
      title=""
      :footer="null"
      class="modal"
      :width="320"
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
import { mapActions, mapState } from 'vuex';

const WIDTH = 960;

export default {
  name: 'CatalogModal',
  components: {
    CatalogModalItem: () => import('./CatalogModalItem/CatalogModalItem'),
  },
  props: {
    isVisible: Boolean,
    activeCategory: Object,
    onClose: Function,
  },
  data() {
    return {
      width: WIDTH,
      isVisibleDescription: false,
      activeProduct: null,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.productsCategory,
      loading: (state) => state.loadingProducts,
    }),
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },

  methods: {
    ...mapActions({
      addProduct: 'cart/addProduct',
      removeProduct: 'cart/removeProduct',
    }),

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
@import url('./CatalogModal.less');
</style>
