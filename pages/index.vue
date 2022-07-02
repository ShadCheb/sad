<template>
  <!-- <div :class="$style.main">
    <div :class="$style.mainBanner">
      <Banner />
    </div>
    <div :class="$style.mainCatalog">
      <Catalog />
    </div>
    <div :class="$style.mainMaps">
      <Maps />
    </div>


  </div> -->

  <Main />
</template>

<script>
// import Banner from '~~/components/main/Banner/Banner'
// import Catalog from '~~/components/main/Catalog/Catalog'
// import Maps from '~~/components/main/Maps/Maps'
import Main from '~~/components/main/Main/Main';

export default {
  components: {
    Main,
  },
  // app, route, params, error, store
  async asyncData({}) {
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
};
</script>

<style lang="less" module>
// @import url('./style.less');
</style>
