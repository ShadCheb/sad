<template>
  <div :class="$style.main">
    <div :class="$style.mainBanner">
      <Banner />
    </div>
    <div :class="$style.mainCatalog">
      <Catalog />
    </div>
    <div :class="$style.mainMaps">
      <Maps />
    </div>


    <!-- <h1>Интернет-магазин "Хвостики"</h1>
    <CategoriesList
      :categories="categories"
    /> -->
  </div>
</template>

<script>
// import CategoriesList from '~~/components/common/CategoriesList/CategoriesList'
import Banner from '~~/components/main/Banner/Banner'
import Catalog from '~~/components/main/Catalog/Catalog'
import Maps from '~~/components/main/Maps/Maps'
import { mapState } from 'vuex'

export default {
  components: {
    Banner,
    Catalog,
    Maps,
    // CategoriesList
  },
  async asyncData ({ app, route, params, error, store }) {
    // try {
    //   await store.dispatch('getCategoriesList');
    // } catch (err) {
    //   console.error(err)
    //   return error({
    //     statusCode: 404,
    //     message: 'Категории не найдены или сервер не доступен'
    //   })
    // }
  },
  computed: {
    // ...mapState({
    //   categories: 'categoriesList'
    // })
  },
}
</script>

<style lang="less" module>
  @import url('./style.less');
</style>
