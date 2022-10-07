<template>
  <Grid column center-i center-j :width="mobile ? 80 : 35">
    <Button :to="account ? '/quiz' : 'login'"> {{ account ? 'Начать тест 📄' : 'Войти в аккаунт' }} </Button>
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
      ...mapState('user', ['account']),
    },
  };
</script>
