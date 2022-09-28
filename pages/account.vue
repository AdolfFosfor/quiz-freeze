<template>
  <Grid column center-i center-j :width="mobile ? 80 : 60">
    <div style="margin-bottom: 1rem">id: {{ account.id }}</div>
    <div style="margin-bottom: 1rem">name: {{ account.name }}</div>
    <div style="margin-bottom: 1rem">email: {{ account.email }}</div>
    <div style="margin-bottom: 1rem">media: {{ account.media }}</div>
    <div style="margin-bottom: 1rem">registrationStatus: {{ account.registrationStatus }}</div>
    <div style="margin-bottom: 1rem">createdAt: {{ account.createdAt }}</div>
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
