<template>
  <div class="page">
    <Grid column center-i center-j>
      <form @submit.prevent="register(form)">
        <Input label="name" required type="text" name @input="set('name', $event)" />
        <Input label="email" required type="email" @input="set('email', $event)" />
        <Input label="password" required type="password" @input="set('password', $event)" />

        <Button mt="1" submit>save</Button>
      </form>
    </Grid>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

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
