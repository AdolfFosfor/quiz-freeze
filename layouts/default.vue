<template>
  <div ref="app">
    <Grid class="app" center-j center-i>
      <Grid class="logo">
        <nuxt-link to="/" class="link" />

        <img src="/logo.svg" alt="Quiz Freeze" />
      </Grid>

      <Pagination v-if="$route.name === 'quiz-id'" />
      <Account />

      <Nuxt />
    </Grid>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import Grid from '@/components/Atoms/Grid';
  import Pagination from '@/components/Pagination';
  import Account from '@/components/Account';

  export default {
    components: { Grid, Pagination, Account },
    middleware: 'account',
    transition: 'page',
    computed: {
      ...mapState(['mobile']),
    },
    mounted() {
      this.setMobile(window.innerWidth < 768);
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      });
      window.addEventListener('storage', this.storageListener);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
      document.removeEventListener('storage', this.storageListener);
    },
    methods: {
      ...mapMutations(['setMobile']),
      ...mapMutations('user', ['setAccount']),

      onResize() {
        this.setMobile(window.innerWidth < 768);
      },

      storageListener() {
        if (!localStorage.getItem('accessToken')) this.setAccount(false);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .app {
    width: 100vw;
    height: 100vh;

    padding-top: 3rem;
  }

  .logo {
    position: absolute;
    top: 3rem;

    width: 5rem;

    transition: all 200ms ease-in-out;

    img {
      width: 100%;
    }

    &:hover {
      transform: translateY(-2px);
      filter: drop-shadow(0 2px 1px rgba(0, 98, 189, 0.5));
    }
  }
</style>
