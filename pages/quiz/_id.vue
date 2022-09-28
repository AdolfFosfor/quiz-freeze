<template>
  <Grid column center-i center-j :width="80">
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis, culpa cupiditate error fugiat illum in maiores
      maxime molestiae non optio possimus quaerat repellendus reprehenderit voluptates? Dolorem ea quod voluptatum.
    </div>

    <Grid :column="mobile">
      <Button
        v-for="(item, i) of 4"
        :key="i"
        :to="`/quiz/${item}`"
        :style="$store.state.mobile ? 'margin: 0.8rem 0;' : 'margin: 0 0.5rem;'"
        @onClick="to(item)"
      >
        page 🤌🏻 {{ item }}
      </Button>
    </Grid>
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
    },

    methods: {
      to(e) {
        console.log(`Hello Button №${e}`);
      },
    },
  };
</script>

<style>
  .text {
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
</style>
