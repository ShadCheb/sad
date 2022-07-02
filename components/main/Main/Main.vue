<template>
  <div :class="$style.main">
    <div :class="$style.container">
      <div :class="$style.blockText">
        <div :class="$style.socials">
          <a :class="$style.socialIcon" href="#0" target="_blank">
            Vk
            <svg>
              <use href="~/assets/svg/sprite.svg#vk" />
            </svg>
          </a>
        </div>

        <h2 :class="$style.aboveTitle">семена, саженцы</h2>
        <h1 :class="$style.title">Ванюшкин Сад</h1>
        <h3 :class="$style.underTitle">Чебоксары</h3>

        <button :class="['btn-2', $style.button]">Каталог</button>
      </div>
      <div :class="$style.blockImages"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="less" module>
@import url('./Main.less');
</style>
