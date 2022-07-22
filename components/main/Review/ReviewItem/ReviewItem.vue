<template>
  <div v-if="review" :class="[$style.reviewItem, className]">
    <div :class="$style.reviewItemImage">
      <img
        v-if="review.profile.photo"
        :src="review.profile.photo"
      />
    </div>
    <div :class="$style.reviewItemText">
      <p v-if="review.profile" :class="$style.reviewItemName">
        {{
          `${review.profile.first_name || ''} ${
            review.profile.last_name
          }`.trim()
        }}
      </p>
      <p :class="$style.reviewItemContext">
        {{ review.text || '' }}
      </p>
      <p :class="$style.reviewItemDate">
        {{ review.date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewItem',
  props: {
    review: Object,
    className: String,
  },
};
</script>

<style lang="less" module>
@import url('./ReviewItem.less');
</style>
