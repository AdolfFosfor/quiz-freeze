<template>
  <Grid v-if="account" class="card" p="5" column center-i center-j round="8" :width="mobile ? 80 : 40">
    <Grid position="absolute" t="0" l="0" center-j center-i>
      <AccountButton position="absolute" upload @upload="uploadImage($event)" />
    </Grid>

    <Words h3>{{ account.name }}</Words>
    <Words>{{ account.email }}</Words>
    <Words mt="1" size="0.8" underline>Дата Регистрации: {{ registered }}</Words>

    <Grid position="absolute" ta="100" center-j center-i>
      <Button position="absolute" @click="logout">Выход</Button>
    </Grid>
  </Grid>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  import Grid from '~/components/Atoms/Grid';
  import AccountButton from '~/components/Account';
  import Words from '~/components/Atoms/Words';
  import Button from '~/components/Atoms/Button';

  export default {
    name: 'Account',
    components: { Button, Words, AccountButton, Grid },

    computed: {
      ...mapState(['mobile']),
      ...mapState('user', ['account']),

      registered() {
        let time = null;
        if (this.account.createdAt) {
          time = new Date(this.account.createdAt).toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        }
        return time;
      },
    },

    methods: {
      ...mapActions('user', ['uploadImage', 'logout']),
    },
  };
</script>

<style lang="scss" scoped>
  .card {
    background: rgba(255, 255, 255, 0.1);
  }
</style>
