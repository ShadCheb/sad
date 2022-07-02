<template>
  <div class="body">
    <Header />
    <Navigation />
    <Breadcrumbs />
    <nuxt />
    <div class="grow-block" />
    <Footer />
  </div>
</template>

<script>
import Header from '~~/components/common/Header/Header.vue';
// import Navigation from '~~/components/common/Navigation/Navigation.vue'
// import Breadcrumbs from '~~/components/common/Breadcrumbs/Breadcrumbs.vue'
import Footer from '~~/components/common/Footer/Footer.vue';

export default {
  components: {
    Header,
    // Breadcrumbs,
    // Navigation,
    Footer,
  },

  head() {
    const mySite = 'https://mysite.com';
    const canonical = `${mySite}${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`;
    return {
      meta: [...this.meta],
      script: [
        // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
      ],
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
        { hid: 'description', name: 'description', content: 'Главная' },
      ];
    },
  },
};
</script>
