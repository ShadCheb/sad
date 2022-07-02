<template>
  <div
    :class="$style.breadcrumbs"
  >
    <div
      v-if="bredcrumbs && bredcrumbs.length > 0"
      :class="$style.breadcrumbsContainer"
    >
      <a-breadcrumb>
        <a-breadcrumb-item
          v-for="cr in bredcrumbs"
          :key="cr.url"
        >
          <n-link :to="cr.url">
            {{ cr.title }}
          </n-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item
          v-if="currentPath"
        >
          {{ currentPath }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>



<script>
const getPath = (path) => {
  let bredcrumbs = [];
  let currentPath = '';

  switch (path) {
    case '':
    case '/':
      break;
    case '/catalog':
      bredcrumbs = [
        {
          title: 'Главная',
          url: '/'
        }
      ];
      currentPath = 'Коллекция'
      break;
    case '/catalog/covers':
      bredcrumbs = [
        {
          title: 'Главная',
          url: '/'
        },
        {
          title: 'Коллекция',
          url: '/catalog'
        }
      ];
      currentPath = 'Trends summer 2020'
      break;
    default:
      break;
  }

  return {
    bredcrumbs,
    currentPath,
  }
}

export default {
  data() {
    return {
      bredcrumbs: [],
      currentPath: '',
    }
  },
  watch: {
    $route(to) {
      const { path } = to;
      const { bredcrumbs, currentPath } = getPath(path);

      this.bredcrumbs = bredcrumbs;
      this.currentPath = currentPath;
    }
  },
  created() {
    const path = this.$route.path;
    const { bredcrumbs, currentPath } = getPath(path);

    this.bredcrumbs = bredcrumbs;
    this.currentPath = currentPath;
  },
  // computed: {
  //   ...mapState({
  //     bredcrumbs: 'bredcrumbs'
  //   })
  // },
}
</script>

<style lang="less" module>
  @import url('./Breadcrumbs.less');
</style>