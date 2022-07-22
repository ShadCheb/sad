<template>
  <div :class="$style.main">
    <div :class="$style.mainContainer">
      <div :class="$style.blockText">
        <div :class="$style.blockTextInfo">
          <p :class="$style.blockTextTime">
            Пн-Вс: 9.00-19.00
          </p>
          <a
            :class="$style.blockTextPhone"
            href="tel:+79279934519"
          >
            +7(927) 993-45-19
          </a>
          <a
            :class="$style.blockTextVk"
            href="https://vk.com/vanushkinsad"
            target="_blank"
          >
            Группа ВКонтакте
            <img :src="require('~/assets/img/vk.png')" alt="vk" />
          </a>
        </div>

        <div :class="$style.title">
          <div :class="$style.titleMain">
            <h1>Питомник "Ванюшкин Сад"</h1>
          </div>
          <div :class="$style.titleBlock">
            <p>Широкий выбор декоративных расстений и кустарников различного возраста и размера</p>
            <p>Чебоксары</p>
          </div>
          <div :class="$style.titleLink">
            <a href="#catalog">
              <img :src="require('~/assets/img/right.png')" alt="right" />
              Посмотреть каталог
            </a>
          </div>
        </div>
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
