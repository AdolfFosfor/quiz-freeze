<template>
  <Grid class="app" center-j center-i>
    <Pagination />
    <Account />

    <Nuxt />
  </Grid>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import Grid from '@/components/Atoms/Grid';
  import Pagination from '@/components/Pagination';
  import Account from '@/components/Account';

  export default {
    components: { Grid, Pagination, Account },
    computed: {
      ...mapState(['mobile']),
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      });
      this.setMobile(window.innerWidth < 768);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    },
    methods: {
      ...mapMutations(['setMobile']),

      onResize() {
        this.setMobile(window.innerWidth < 768);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .app {
    width: 100vw;
    height: 100vh;

    padding-top: calc(var(--index) * 3);
  }
</style>
