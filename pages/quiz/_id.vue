<template>
  <Grid v-if="question" column center-i center-j :width="80">
    <!--    <Words h3 mb="2">{{ question.orderNumber }}</Words>-->

    <Words h5 center weight="7" mb="2"> Unde Vopros UЭЙ </Words>

    <Grid :column="mobile">
      <Button v-for="{ id, score, title } of question.options" :key="id" mx="1" px="1">
        <Grid center-i center-j position="absolute" t="0" r="0">
          <Words>{{ score }}</Words>
        </Grid>
        <Words>
          {{ title }}
        </Words>
      </Button>
    </Grid>
  </Grid>
</template>

<script>
  import { mapState } from 'vuex';
  import Grid from '@/components/Atoms/Grid';
  import Words from '~/components/Atoms/Words';
  import Button from '~/components/Atoms/Button';

  export default {
    components: { Button, Words, Grid },

    async fetch({ store, route }) {
      await store.dispatch('quiz/setQuestions');
      await store.dispatch('quiz/setQuestion', route.params.id);
    },

    computed: {
      ...mapState(['mobile']),
      ...mapState('quiz', ['question']),
    },

    mounted() {
      // console.log(this.$route.params.id);
      // this.setQuestion(this.$route.params.id);
    },

    methods: {
      // ...mapMutations('quiz', ['setQuestion']),
      // to(e) {
      //   console.log(`Hello Button №${e}`);
      // },
    },
  };
</script>
