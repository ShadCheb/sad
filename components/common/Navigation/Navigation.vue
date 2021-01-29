<template>
  <div :class="$style.navigation">
    <div :class="$style.navigationBody">
      <ul :class="$style.navigationList">
        <li
          v-for="item in list"
          :key="item.id"
        >
          <n-link
            :to="item.url"
          >
            {{ item.title }}
          </n-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: '',
      list: [
        {
          id: 0,
          url: '#0',
          title: 'О нас',
          type: 'about',
        },
        {
          id: 1,
          url: '/catalog',
          title: 'Каталог',
          type: 'catalog',
        },
        {
          id: 2,
          url: '#0',
          title: 'Промо-акции',
          type: 'stock',
        },
        {
          id: 3,
          url: '#0',
          title: 'Вопрос-ответ',
          type: 'question',
        },
        {
          id: 4,
          url: '#0',
          title: 'Вакансии',
          type: 'vacancy',
        },
      ]
    }
  },
  created() {

    // console.log('===============PATH', this.$route );
    // console.log('===============NAME', this.$nuxt && this.$nuxt.$route);
  },
}
</script>

<style lang="less" module>
  @import url('./Navigation.less');
</style>
