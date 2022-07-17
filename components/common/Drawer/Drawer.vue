<template>
  <a-drawer
    :width="width"
    title=""
    :visible="visible"
    @close="changeVisibleMenu"
  >
    <ul :class="$style.drawer">
      <li>
        <a href="" @click.prevent="onLink('nursery')">О питомнике</a>
      </li>
      <li>
        <a href="" @click.prevent="onLink('about')">О владельцах</a>
      </li>
      <li>
        <a href="" @click.prevent="onLink('catalog')">Каталог</a>
      </li>
      <li>
        <a href="" @click.prevent="onLink('review')">Отзывы</a>
      </li>
      <li>
        <a href="" @click.prevent="onLink('maps')">Адрес</a>
      </li>
    </ul>
  </a-drawer>
</template>

<script>
import { mapActions, mapState } from 'vuex';

const WIDTH = 500;

export default {
  name: 'Drawer',
  data() {
    return {
      width: 500,
    };
  },
  computed: {
    ...mapState({
      visible: (state) => state.menu.visible,
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
      changeVisibleMenu: 'menu/changeVisibleMenu',
    }),
    getDimensions() {
      const width = document.documentElement.clientWidth;

      this.width = width >= 960 ? WIDTH : '100%';
    },
    onLink(link) {
      this.changeVisibleMenu();
      location.href = `#${link}`;
    },
  },
};
</script>

<style lang="less" module>
@import url('./Drawer.less');
</style>
