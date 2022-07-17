<template>
  <div id="maps" :class="$style.maps">
    <div :class="$style.mapsContainer">
      <div :class="$style.mapsBlock">
        <div :class="$style.mapsAddress">
          <p>ул. Еловая, д. 3, <strong>Питомник "Ванюшкин Сад"</strong></p>
          <p>
            ул. Юрия Гагарина, д. 1 к. 1, <strong>Центральный рынок</strong>
          </p>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad997c5910c6f50f4162919c36a0d3b1b73f4eafadea0022d7421bcba4a47a0d6&amp;source=constructor"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Maps',
};
</script>

<style lang="less" module>
@import url('./Maps.less');
</style>
