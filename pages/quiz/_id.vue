<template>
  <div ref="page" class="page">
    <Grid column center-i center-j>
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis, culpa cupiditate error fugiat illum in maiores
        maxime molestiae non optio possimus quaerat repellendus reprehenderit voluptates? Dolorem ea quod voluptatum.
      </div>

      <Grid :column="mobile">
        <Button
          v-for="(item, i) of 4"
          :key="i"
          :to="`/quiz/${item}`"
          :style="$store.state.mobile ? 'margin: calc(var(--index) * 0.8) 0;' : 'margin: 0 calc(var(--index) * 0.5);'"
          @onClick="to(item)"
        >
          page 🤌🏻 {{ item }}
        </Button>
      </Grid>
    </Grid>
  </div>
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

    mounted() {
      this.$refs.page.classList.add('fade-in');
    },

    beforeDestroy() {
      this.$refs.page.classList.remove('fade-in');
      this.$refs.page.classList.add('fade-out');
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
    font-size: calc(var(--index) * 1.4);
    margin-bottom: calc(var(--index) * 2);
  }
</style>
