<template>
  <Grid column center-i center-j :width="mobile ? 80 : 35">
    <form style="width: 100%" @submit.prevent="logins(form)">
      <Input label="email" required type="email" @input="set('email', $event)" />
      <Input label="password" required type="password" @input="set('password', $event)" />

      <Button mt="1" submit>Log In</Button>
      <Grid py="1" center-j> Are You new one? <nuxt-link to="/register" style="margin-left: 0.2rem">Register</nuxt-link> </Grid>
    </form>
  </Grid>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  import Grid from '~/components/Atoms/Grid';
  import Input from '~/components/Atoms/Input';
  import Button from '~/components/Atoms/Button';

  export default {
    name: 'Account',
    components: { Button, Input, Grid },

    data: () => ({
      form: {
        email: '',
        password: '',
      },
    }),

    head() {
      return {
        title: 'Quiz Freeze 🧩 | Registration',
      };
    },

    computed: {
      ...mapState(['mobile']),
    },

    methods: {
      ...mapActions('user', ['login']),

      set(name, value) {
        this.form[name] = value.toString();
      },

      logins() {
        this.login(this.form);
      },
    },
  };
</script>
