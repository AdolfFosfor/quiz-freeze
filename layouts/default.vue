<template>
  <Grid id="app" center-j center-i>
    <!--    <Nuxt />-->
  </Grid>
</template>

<script>
  import Grid from '@/components/atoms/Grid';

  export default {
    components: { Grid },
  };
</script>

<style lang="scss" scoped>
  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
