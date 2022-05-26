<template>
  <div ref="page">
    <Grid column center-i center-j>
      <!--      <div style="margin-bottom: calc(var(&#45;&#45;index) * 1)">Hello Account Page</div>-->

      <Input label="login" name @input="log($event)" />

      <!--      <Input label="password" />-->

      <Button full style="margin-top: calc(var(--index) * 1)">save</Button>
      <!--      <Button full style="margin-top: calc(var(&#45;&#45;index) * 1)">log out</Button>-->
    </Grid>
  </div>
</template>

<script>
  import Grid from '~/components/Atoms/Grid';
  import Input from '~/components/Atoms/Input';
  import Button from '~/components/Atoms/Button';
  export default {
    name: 'Account',
    components: { Button, Input, Grid },
    mounted() {
      this.$refs.page.classList.add('fade-in');
    },

    beforeDestroy() {
      this.$refs.page.classList.remove('fade-in');
      this.$refs.page.classList.add('fade-out');
    },

    methods: {
      log(e) {
        console.log(e);
      },
    },
  };
</script>
