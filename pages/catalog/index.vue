<template>
  <div :class="$style.category">
    <div :class="$style.categoryContent">
      <div :class="$style.categoryBlocks">
        <div :class="$style.block">
          <div :class="$style.blockHead">
            <div :class="$style.blockCaption">
              <p>Коллекция</p>
              <h2>Trends summer 2020</h2>
            </div>
            <div :class="$style.blockBtn">
              <n-link
                :to="'/catalog/covers'"
                class="btn-2"
                tag="button"
              >
                Показать
              </n-link>
              <!--<button class="btn-2">Показать</button>-->
            </div>
          </div>
          <div :class="$style.blockExample">
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
          </div>
        </div>
        <div :class="$style.block">
          <div :class="$style.blockHead">
            <div :class="$style.blockCaption">
              <p>Коллекция</p>
              <h2>Trends summer 2020</h2>
            </div>
            <div :class="$style.blockBtn">
              <n-link
                :to="'/catalog/covers'"
                class="btn-2"
                tag="button"
              >
                Показать
              </n-link>
              <!--<button class="btn-2">Показать</button>-->
            </div>
          </div>
          <div :class="$style.blockExample">
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
            <div :class="$style.blockCase"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ProductBrief from '~~/components/category/ProductBrief'
// import { mapState } from 'vuex'
/*
const categoriesList = [
  {
    id: 0,
    name: 'Trends summer 2020',
    block_bcg: '',
    blcok_img: '',
    cases: ['', ''],
  },
  {
    id: 1,
    name: 'La casa de papel',
    block_bcg: '',
    blcok_img: '',
    cases: ['', ''],
  },
  {
    id: 2,
    name: 'Minimalizm',
    block_bcg: '',
    blcok_img: '',
    cases: ['', ''],
  },
  {
    id: 3,
    name: 'Мамочки',
    block_bcg: '',
    blcok_img: '',
    cases: ['', ''],
  },
  {
    id: 4,
    name: 'Билеты',
    block_bcg: '',
    blcok_img: '',
    cases: ['', ''],
  },
]
*/

export default {
  // components: {
  //   ProductBrief
  // },
  // async asyncData ({ app, params, route, error }) {
  //   try {
  //     await app.store.dispatch('getCurrentCategory', { route })
  //   } catch (err) {
  //     console.error(err)
  //     return error({
  //       statusCode: 404,
  //       message: 'Категория не найдена или сервер не доступен'
  //     })
  //   }
  // },
  // head () {
  //   return {
  //     title: this.category.cTitle,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.category.cMetaDescription
  //       }
  //     ]
  //   }
  // },
  // computed: {
  //   ...mapState({
  //     category: 'currentCategory'
  //   })
  // },
}
</script>

<style lang="less" module>
  @import url(./style.less);
</style>
