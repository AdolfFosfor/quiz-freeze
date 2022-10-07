<template>
  <Grid column center-i center-j :width="80">
    <Grid v-if="question" column>
      <Button v-for="{ id, title } of question.options" :key="id" my="1" py="2" @click="sendAnswer(id)">
        <Words size="1.2">
          {{ title }}
        </Words>
      </Button>
    </Grid>
    <Grid v-else column center-i>
      <Words h6> Ваш результат: {{ answers.answeredQuestions === 44 ? answers.testScore : 'ERROR' }}, а значит у вас </Words>
      <Words h3>
        {{ answers.answeredQuestions === 44 ? depression : 'ERROR' }}
      </Words>
    </Grid>
  </Grid>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import Grid from '~/components/Atoms/Grid';
  import Words from '~/components/Atoms/Words';
  import Button from '~/components/Atoms/Button';

  export default {
    components: { Button, Words, Grid },

    async fetch({ store }) {
      await store.dispatch('quiz/setAnswers');

      await store.dispatch('quiz/setQuestions');
      await store.dispatch('quiz/setQuestion', store.state.quiz.answers.answeredQuestions + 1);
    },

    computed: {
      ...mapState(['mobile']),
      ...mapState('quiz', ['question', 'answers']),

      depression() {
        const { testScore } = this.answers;
        let depressionLVL = '';

        if (testScore < 10) depressionLVL = 'Депрессия отсутствует либо незначительна 😀';
        if (testScore > 9 && testScore < 25) depressionLVL = 'Депрессия минимальна 🙂';
        if (testScore > 24 && testScore < 45) depressionLVL = 'Легкая депрессия 🤫';
        if (testScore > 44 && testScore < 68) depressionLVL = 'Умеренная депрессия 🫠';
        if (testScore > 67 && testScore < 88) depressionLVL = 'Выраженная депрессия 🥴';
        if (testScore > 87) depressionLVL = 'Глубокая депрессия 😵‍💫';

        return depressionLVL;
      },
    },

    watch: {
      answers() {
        if (this.answers) {
          this.setQuestion(this.answers.answeredQuestions + 1);
        }
      },
    },

    mounted() {
      window.onkeydown = ({ shiftKey, code }) => {
        if (code === 'KeyR' && shiftKey) this.resetAnswers();
      };
    },

    methods: {
      ...mapActions('quiz', ['setQuestion', 'sendAnswer', 'resetAnswers']),
    },
  };
</script>
