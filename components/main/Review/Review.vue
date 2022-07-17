<template>
  <div id="review" :class="$style.review">
    <div :class="$style.reviewContainer">
      <h2 class="title-h2">Отзывы</h2>
      <div :class="$style.reviewBody">
        <ReviewItem
          v-for="review in reviews"
          :key="review.id"
          :review="review"
          :className="$style.reviewBlock"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Review',
  components: {
    ReviewItem: () => import('./ReviewItem/ReviewItem'),
  },
  computed: {
    ...mapState({
      reviews: (state) => state.reviews,
    }),
  },
};
</script>

<style lang="less" module>
@import url('./Review.less');
</style>
