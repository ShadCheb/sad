<template>
  <div :class="$style.banner">
    <div :class="$style.bannerBody">
      <client-only>
        <!-- ref="flickity" -->
        <Flickity
          :class="$style.bannerView"
          ref="flickity"
          :options="flickityOptions"
        >
          <div :class="$style.bannerItem">
            <div></div>
          </div>
          <div :class="$style.bannerItem">
            <div></div>
          </div>
          <div :class="$style.bannerItem">
            <div></div>
          </div>
          <div :class="$style.bannerItem">
            <div></div>
          </div>
          <div :class="$style.bannerItem">
            <div></div>
          </div>
        </Flickity>
        <div :class="$style.bannerBtns">
          <button
            :class="[$style.bannerBtn, $style.bannerBtnLeft]"
            @click="previous()"
          >Previous</button>
          <button
            :class="[$style.bannerBtn, $style.bannerBtnRight]"
            @click="next()"
          >Next</button>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
// import Flickity from 'vue-flickity';
export default {
  name: 'MainBanner',
  components: {
    // Flickity,
    // CategoriesList
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>


<style>
  .flickity-viewport {
    padding-top: 10px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .flickity-page-dots {
    bottom: 70px;
    right: 70px;
    width: auto;
  }
</style>
<style lang="less" module>
  @import url('./Banner.less');  
</style>