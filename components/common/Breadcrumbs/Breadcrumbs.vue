<template>
  <div
    v-if="bredcrumbs && bredcrumbs.length > 0"
    :class="$style.breadcrumbs"
  >
    <ul>
      <li
        v-for="cr in bredcrumbs"
        :key="cr.url"
      >
        <n-link :to="cr.url">
          {{ cr.title }}
        </n-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      bredcrumbs: 'bredcrumbs'
    })
  }
}
</script>

<style lang="less" module>
  @import url('./Breadcrumbs.less');
</style>