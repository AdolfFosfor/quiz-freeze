<template>
  <div>
    <Grid column center-i center-j>
      <!--      <div style="margin-bottom: calc(var(&#45;&#45;index) * 1)">Hello Account Page</div>-->

      <Input label="login" name @input="log($event)" />

      <!--      <Input label="password" />-->

      <Button style="margin-top: 1rem">save</Button>
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
  };
</script>
