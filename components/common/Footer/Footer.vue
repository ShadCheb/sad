<template>
  <footer :class="$style.footer">
    <div :class="$style.footerContainer">
      <p :class="$style.footerText">© 2022 Компания Ванюшкин сад</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="less" module>
@import url('./Footer.less');
</style>
