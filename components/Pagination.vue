<template>
  <div ref="pagination" class="pagination smooth-in noSelect" :style="spacingStyles">
    <Words h3 weight="9">{{ answers.answeredQuestions === 44 ? 44 : answers.answeredQuestions + 1 }} / 44</Words>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Words from '~/components/Atoms/Words';
  import Spacing from '~/components/Modules/Spacing';

  export default {
    name: 'Pagination',
    components: { Words },
    extends: Spacing,
    computed: {
      ...mapState('quiz', ['answers']),
    },
  };
</script>

<style lang="scss" scoped>
  .pagination {
    padding: 2.5rem;
    opacity: 0.4;
  }
</style>
