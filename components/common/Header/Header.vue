<template>
  <div :class="$style.header">
    <div :class="$style.headerBody">
      <n-link :class="$style.headerLogo" to="/">
        <!-- <img src="~/assets/img/logo_color_white.png"> -->
        <img
          src="~/assets/svg/logo_color_black.svg"
          alt="Tifity логотип"
        >
      </n-link>
      <div :class="[$style.social, $style.headerSocail]">
        <a
          :class="$style.socialIcon"
          href="#0"
          target="_blank"
        >Vk
          <svg>
            <use href="~/assets/svg/sprite.svg#vk" />
          </svg>
        </a>
        <a
          :class="$style.socialIcon"
          href="#0"
          target="_blank"
        >Instagram
          <svg>
            <use href="~/assets/svg/sprite.svg#instagram" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" module>
  @import url('./Header.less');
</style>
