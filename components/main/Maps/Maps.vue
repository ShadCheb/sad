<template>
  <div :class="$style.maps">
    <div :class="$style.mapsContainer">
      <div :class="$style.mapsBlock">
        <div :class="$style.mapsColLeft">
          <p :class="$style.mapsTextOne">
            У нас
          </p>
        </div>
        <div :class="$style.mapsColCenter">
          <p :class="$style.mapsTextTwo">
            <strong>39</strong> магазинов
          </p>
        </div>
        <div :class="$style.mapsColRight">
          <button class="btn-1">
            <div class="btn-1__content">
              <p class="btn-1__text">
                Найди ближайший
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCatalog',
}
</script>

<style lang="less" module>
  @import url('./Maps.less');
</style>
