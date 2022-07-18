<template>
  <div :class="$style.main">
    <div :class="$style.container">
      <div :class="$style.blockText">
        <div :class="$style.blockTextInfo">
          <a href="tel:+79279934519">+7(927) 993-45-19</a>
          <p>Бесплатная доставка от 1000 руб.</p>
        </div>

        <div :class="$style.socials">
          <a
            :class="$style.socialIcon"
            href="https://vk.com/vanushkinsad"
            target="_blank"
          >
            Vk
            <img :src="require('~/assets/img/vk.png')" alt="vk" />
          </a>
        </div>

        <h2 :class="$style.aboveTitle">семена, саженцы</h2>
        <h1 :class="$style.title">Ванюшкин Сад</h1>
        <h3 :class="$style.underTitle">Чебоксары</h3>

        <a href="#catalog" :class="['btn-2', $style.button]">Каталог</a>
      </div>
      <div :class="$style.blockImages">
        <picture>
          <source
            :srcset="require('~/assets/img/main_m.png')"
            media="(max-width: 768px)"
          />
          <img :srcset="require('~/assets/img/main.png')" alt="Ванюшкин сад" />
        </picture>
      </div>
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
