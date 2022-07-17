<template>
  <div v-if="review" :class="[$style.reviewItem, className]">
    <div :class="$style.reviewItemImage">
      <Photo
        v-if="review.profile.photo"
        :img="review.profile.photo"
        :class="$style.reviewItemPhoto"
      />
    </div>
    <div :class="$style.reviewItemText">
      <h2 v-if="review.profile" :class="$style.reviewItemName">
        {{
          `${review.profile.first_name || ''} ${
            review.profile.last_name
          }`.trim()
        }}
      </h2>
      <p class="text-p">
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
  components: {
    Photo: () => import('~~/components/common/Photo/Photo'),
  },
  props: {
    review: Object,
    className: String,
  },
};
</script>

<style lang="less" module>
@import url('./ReviewItem.less');
</style>
