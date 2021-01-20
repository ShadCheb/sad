<template>
  <div :class="$style.wrapper">
    <div :class="$style.header">
      <n-link :class="$style.logo" to="/">
        <p>
          Хвостики
        </p>
      </n-link>
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
