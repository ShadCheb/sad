<template>
  <div class="body">
    <Header />
    <nuxt />
    <div class="grow-block" />
    <Footer />
  </div>
</template>

<script>
import Header from '~~/components/common/Header/Header.vue';
import Footer from '~~/components/common/Footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },

  head() {
    const mySite = 'https://mysite.com';
    const canonical = `${mySite}${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`;
    return {
      meta: [...this.meta],
      script: [],
      link: [{ rel: 'canonical', href: canonical }],
    };
  },
  computed: {
    meta() {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: require('~/assets/img/Mz8_Rc-KtCE.jpeg'),
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Плодовые (деревья и кустарники), декоротивные (хвойные и лиственные),' +
            'многолетние цветы - все это Вы можете приобрести по цене производителя' +
            'как оптом, так и в розницу. Так же мы с удовольствием поможем Вам не' +
            'только выбрать растения, но и проконсультируем как посадить и' +
            'ухаживать за саженцами . Вы можете заказывать доставку и посадку в' +
            'любую точку Чувашской республики и соседних городов. Так же наше' +
            'заведение занимается озеленением и благоустройством территории и' +
            'приусадебных участвком "Под ключ".',
        },
      ];
    },
  },
};
</script>
