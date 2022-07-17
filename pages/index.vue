<template>
  <div :class="$style.main">
    <div :class="$style.mainContainer">
      <Main />
      <Nursery />
      <About />
      <Catalog />
      <Review />
      <Maps />

      <Drawer />
      <CartModal />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Main from '~~/components/main/Main/Main';
import Nursery from '~~/components/main/Nursery/Nursery';
import About from '~~/components/main/About/About';
import Catalog from '~~/components/main/Catalog/Catalog';
import Review from '~~/components/main/Review/Review';
import Maps from '~~/components/main/Maps/Maps';

import Drawer from '~~/components/common/Drawer/Drawer';
import CartModal from '~~/components/common/CartModal/CartModal';

export default {
  components: {
    Main,
    Nursery,
    About,
    Catalog,
    Review,
    Maps,
    Drawer,
    CartModal,
  },
  async asyncData({ app, params, route, error, store }) {
    try {
      await Promise.all([
        store.dispatch('getCategoriesList'),
        store.dispatch('getReviewsList'),
      ]);
      // await app.store.dispatch('getCategoriesList', {
      //   categoryId: this.categoryId,
      // });
    } catch (err) {
      console.log('=========ERR_1', err);
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен',
      });
    }
  },
  data() {
    return {
      isVisibleDrawer: false,
    };
  },
  computed: {
    ...mapState({
      categoriesList: (state) => {
        console.log('STATE', state.categoriesList);

        return state.categoriesList;
      },
    }),
  },
};
</script>

<style lang="less" module>
@import url('./style.less');
</style>
