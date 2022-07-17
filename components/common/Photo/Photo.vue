<template>
  <div :class="$style.photoblock">
    <div>
      <img :src="require('~/assets/img/200.jpg')" alt="" />
      <img :src="img" :class="[$style.photoblockImage, className]" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    img: String,
    className: String,
  },
};
</script>

<style lang="less" module>
@import url('./Photo.less');
</style>
