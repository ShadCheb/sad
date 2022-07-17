<template>
  <div id="about" :class="$style.nursery">
    <div :class="$style.nurseryContainer">
      <div :class="$style.nurseryText">
        <h2 class="title-h2">О владельцах</h2>
        <p class="text-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          temporibus officiis modi esse earum, distinctio id expedita mollitia
          optio atque explicabo quibusdam doloremque rem cum, maiores tenetur
          soluta cumque alias.
        </p>
        <p class="text-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, ad,
          reiciendis quam aliquam nesciunt mollitia maiores voluptate sequi
          exercitationem veniam reprehenderit consequuntur blanditiis et
          accusamus. Doloremque reiciendis provident esse quo!
        </p>
      </div>
      <div :class="$style.nurseryPhoto">
        <Photo
          :img="require('~/assets/img/pitomnik-3.jpeg')"
          :class="$style.nurseryImage1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Photo from '~~/components/common/Photo/Photo';

export default {
  name: 'About',
  components: {
    Photo,
  },
};
</script>

<style lang="less" module>
@import url('./About.less');
</style>
