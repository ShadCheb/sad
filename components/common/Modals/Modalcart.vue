<template>
  <div>
    <client-only>
      <!-- :confirm-loading="confirmLoading" -->
      <a-modal
        title="Корзина"
        :visible="true"
        @ok="onOk"
        @cancel="onCancel"
      >
        <div class="modal-wrapper content-padding">
          <div class=" header-block">
            <p class="h1-header">
              Cart
            </p>
            <div class="close" @click="$modal.hide('customer-cart')">
              <CloseOrDeleteButton />
            </div>
          </div>
          <div v-if="getProductsInCart.length === 0" class="">
            <p>
              Товаров пока нет, но это легко можно исправить :)
            </p>
          </div>
          <template v-else>
            <div class="wrapper">
              <template v-if="getAddedProduct">
                <p class="added-product ">
                  You've added
                </p>
                <div
                  v-for="product in productsFromCart"
                  :key="product.productId"
                  :class="$style.product"
                >
                <!-- <ProductsList
                  class=""
                  :products-from-cart="getAddedProduct"
                /> -->
                <p v-if="getProducts.length > 0" class="added-product ">
                  Previously added products
                </p>
              </template>
              <!-- <ProductsList
                class="products"
                :products-from-cart="getProducts"
              /> -->
                <div
                  v-for="product in productsFromCart"
                  :key="product.productId"
                  :class="$style.product"
                >
            </div>
            <div>Total: {{ getAmount | round }}</div>
            <div class="bottom">
              <a class="button color-grey close-button" @click.prevent="$modal.hide('customer-cart')">
                Close
              </a>
              <div class="amount-block">
                <nuxt-link
                  to="/checkout"
                  class="button color-primary checkout-button"
                >
                  To checkout
                </nuxt-link>
              </div>
            </div>
          </template>
        </div>
      </a-modal>

      <!-- <modal
        name="customer-cart"
        transition="pop-out"
        height="95%"
        width="95%"
        :max-width="960"
        :adaptive="true"
        :scrollable="true"
        :pivot-y="0.5"
        :reset="true"
        classes="v--modal-customer-cart"
        @before-open="beforeOpen"
      >
        
      </modal> -->
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductsList from '~~/components/cart/ProductsList.vue'
import CloseOrDeleteButton from '~~/components/common/input/CloseOrDeleteButton.vue'
import round from '~~/mixins/round.js'

export default {
  components: {
    ProductsList,
    CloseOrDeleteButton
  },
  mixins: [round],
  data () {
    return {
      addedProduct: null,
      defaults: {
        addedProduct: null
      }
    }
  },

  computed: {
    ...mapGetters({
      getProductsInCart: 'cart/getProductsInCart'
    }),
    getAddedProduct () {
      const product = this.getProductsInCart.find(
        prod => prod.productId === this.addedProduct
      )
      if (product) {
        return [product]
      } else {
        return null
      }
    },
    getAmount () {
      let amount = 0
      if (this.getProductsInCart && this.getProductsInCart.length > 0) {
        this.getProductsInCart.forEach(product => {
          amount +=
            parseFloat(product.meta.pPrice) *
            parseInt(product.qty)
        })
        return amount
      } else {
        return 0
      }
    },
    getProducts () {
      if (this.addedProduct) {
        return this.getProductsInCart.filter(
          prod => prod.productId !== this.addedProduct
        )
      } else {
        return this.getProductsInCart
      }
    }

  },

  watch: {
    $route: function () {
      this.$modal.hide('customer-cart')
    },
    getProductsInCart: function (newVal, oldVal) {
      if (oldVal.length > 0) {
        if (this.getProductsInCart.length === 0) {
          this.$modal.hide('customer-cart')
        }
      }
    }
  },
  methods: {
    onOk() {
      console.log('Ok');
    },
    onCancel() {
      console.log('Cancel');
    },

    beforeOpen (event) {
      if (!event.params) {
        event.params = {}
      }
      if (event.params.addedProduct) {
        this.addedProduct = event.params.addedProduct
      } else {
        this.addedProduct = this.defaults.addedProduct
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url('./Modalcart.less');
</style>