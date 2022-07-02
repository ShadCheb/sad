<template>
  <footer :class="$style.footer">
    <div :class="$style.footerContainer">
      <p :class="$style.footerText">
        © 2021 Компания Tifity
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainCatalog',
}
</script>

<style lang="less" module>
  @import url('./Footer.less');
</style>
