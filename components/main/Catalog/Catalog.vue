<template>
  <div :class="$style.catalog">
    <div :class="$style.catalogContainer">
      <div :class="$style.categoryBody">
        <div :class="$style.categoryColLeft">
          <div :class="[$style.block, $style.blockSmall]">
            <div :class="$style.blockContent" />
            <div :class="$style.blockBcg" />
            <!-- <nuxt-link :to="">
              <img
                v-lazy=""
                :class="$style.image"
              >
            </nuxt-link> -->
          </div>
          <div :class="[$style.block, $style.blockSmall]">
            <div :class="$style.blockContent" />
            <div :class="$style.blockBcg" />
            <!-- <nuxt-link :to="">
              <img
                v-lazy=""
                :class="$style.image"
              >
            </nuxt-link> -->
          </div>
        </div>
        <div :class="$style.categoryColRight">
          <div :class="[$style.block, $style.blockBig]">
            <div :class="$style.blockContent" />
            <div :class="$style.blockBcg" />
            <!-- <nuxt-link :to="">
              <img
                v-lazy=""
                :class="$style.image"
              >
            </nuxt-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCatalog',
}
</script>

<style lang="less" module>
  @import url('./Catalog.less');
</style>
