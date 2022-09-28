<template>
  <Grid column center-i center-j :width="mobile ? 80 : 35">
    <form style="width: 100%" @submit.prevent="register(form)">
      <Input label="name" required type="text" name @input="set('name', $event)" />
      <Input label="email" required type="email" @input="set('email', $event)" />
      <Input label="password" required type="password" @input="set('password', $event)" />

      <Button mt="1" submit>Register</Button>
      <Grid py="1" center-j> Do You Have an Account? <nuxt-link to="/login" style="margin-left: 0.2rem">Login</nuxt-link> </Grid>
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
        name: '',
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
      ...mapActions('user', ['register']),

      set(name, value) {
        this.form[name] = value.toString();
      },

      registration() {
        this.register(this.form);
      },
    },
  };
</script>
