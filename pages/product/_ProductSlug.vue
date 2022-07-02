<template>
  <div :class="$style.page">
    <div :class="$style.topBlock">
      <div :class="$style.topLeftBlock">
        <a :href="product.image" target="_blank">
          <img
            v-lazy="product.image"
            :class="$style.image"
          >
        </a>
      </div>
      <div :class="$style.topRightBlock">
        <h1>{{ product.pName }}</h1>
        <p>Цена: {{ product.pPrice }}</p>
        <BuyButton
          :product="product"
        />
      </div>
    </div>
    <h2>Описание</h2>
    <p>{{ product.pDesc }}</p>

    <h2>С этим товаром также покупают</h2>
    <ProductsList
      :products="product.alsoBuyProducts"
    />
    <h2>Возможно вам будет интересно</h2>
    <ProductsList
      :products="product.interestingProducts"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BuyButton from '~~/components/common/Button/BuyButton.vue'

export default {
  components: {
    BuyButton
  },
  async asyncData ({ app, params, route, error }) {
    try {
      await app.store.dispatch('getCurrentProduct', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Товар не найдена или сервер не доступен'
      })
    }
  },
  head () {
    return {
      title: this.product.pTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.pMetaDescription
        }
      ]
    }
  },
  computed: {
    ...mapState({
      product: 'currentProduct'
    })
  },
}
</script>
<style lang="less" module>
  @import url('./ProductSlug.less');
</style>