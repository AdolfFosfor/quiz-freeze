<template>
  <div ref="page" class="page">
    <Grid column center-i center-j>
      <Button :to="`/quiz/1`"> Start Quiz </Button>
    </Grid>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Button from '@/components/Atoms/Button';
  import Grid from '@/components/Atoms/Grid';

  export default {
    components: { Grid, Button },
    computed: {
      ...mapState(['mobile']),
    },

    mounted() {
      this.$refs.page.classList.add('fade-in');
    },

    beforeDestroy() {
      this.$refs.page.classList.remove('fade-in');
      this.$refs.page.classList.add('fade-out');
    },
  };
</script>
