<template>
  <Grid class="question" column center-i center-j>
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis, culpa cupiditate error fugiat illum in maiores
      maxime molestiae non optio possimus quaerat repellendus reprehenderit voluptates? Dolorem ea quod voluptatum.
    </div>

    <Grid :column="mobile">
      <Button v-for="(item, i) of 4" :key="i" style="margin: calc(var(--index) * 0.5)" @onClick="log(item)">Hello World</Button>
    </Grid>
  </Grid>
</template>

<script>
  import { mapState } from 'vuex';
  import Button from '@/components/Atoms/Button';
  import Grid from '~/components/Atoms/Grid';
  export default {
    components: { Grid, Button },
    computed: {
      ...mapState(['mobile']),
    },

    methods: {
      log(e) {
        console.log(`Hello Button №${e}`);
      },
    },
  };
</script>

<style>
  .question {
    max-width: 80%;

    text-align: center;
  }
  .text {
    margin-bottom: 2rem;
  }
</style>
