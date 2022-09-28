<template>
  <Grid column center-i center-j :width="mobile ? 80 : 60">
    <div style="text-align: center">
      {{ account }}
    </div>
  </Grid>
</template>

<script>
  import { mapState } from 'vuex';

  import Grid from '~/components/Atoms/Grid';

  export default {
    name: 'Account',
    components: { Grid },

    computed: {
      ...mapState(['mobile']),
      ...mapState('user', ['account']),
    },
  };
</script>
