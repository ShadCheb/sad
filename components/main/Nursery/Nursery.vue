<template>
  <div id="nursery" :class="$style.nursery">
    <div :class="$style.nurseryContainer">
      <div :class="$style.nurseryPhoto">
        <Photo
          :img="require('~/assets/img/pitomnik-1.jpeg')"
          :class="$style.nurseryImage1"
        />
        <Photo
          :img="require('~/assets/img/pitomnik-2.jpeg')"
          :class="$style.nurseryImage2"
        />
      </div>
      <div :class="$style.nurseryText">
        <h2 class="title-h2">О питомнике</h2>
        <p class="text-p">
          Садовое заведение "Ванюшкиных", основано в 1994 году, является одним
          из серьезных производителей посадочного материала в Чувашии. Мы
          производим качественные, адаптированные к условиям Нечерноземья
          растения.
        </p>
        <p class="text-p">
          Плодовые (деревья и кустарники), декоротивные (хвойные и лиственные),
          многолетние цветы - все это Вы можете приобрести по цене производителя
          как оптом, так и в розницу. Так же мы с удовольствием поможем Вам не
          только выбрать растения, но и проконсультируем как посадить и
          ухаживать за саженцами . Вы можете заказывать доставку и посадку в
          любую точку Чувашской республики и соседних городов. Так же наше
          заведение занимается озеленением и благоустройством территории и
          приусадебных участвком "Под ключ".
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from '~~/components/common/Photo/Photo';

export default {
  name: 'Nursery',
  components: {
    Photo,
  },
};
</script>

<style lang="less" module>
@import url('./Nursery.less');
</style>
