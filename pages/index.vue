<template>
  <Grid column center-i center-j :width="mobile ? 80 : 35">
    <Button :to="`/quiz/1`"> Start Quiz </Button>
  </Grid>
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
  };
</script>
