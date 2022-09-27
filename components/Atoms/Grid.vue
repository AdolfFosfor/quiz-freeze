<template>
  <div
    class="grid"
    :style="`
    ${centerJ && 'justify-content: center'};
    ${centerI && 'align-items: center'};
    ${startJ && 'justify-content: flex-start'};
    ${startI && 'align-items: flex-end'};
    ${endJ && 'justify-content: flex-end'};
    ${endI && 'align-items: flex-end'};
    ${column && 'flex-direction: column'};
    ${wrap && 'flex-wrap: wrap'};
    ${spacingStyles}
  `"
  >
    <slot />
  </div>
</template>

<script>
  import Spacing from '~/components/Modules/Spacing';

  export default {
    name: 'Grid',
    extends: Spacing,
    props: {
      centerJ: Boolean,
      centerI: Boolean,
      startJ: Boolean,
      startI: Boolean,
      endJ: Boolean,
      endI: Boolean,

      column: Boolean,
      wrap: Boolean,
    },
  };
</script>

<style lang="scss" scoped>
  .grid {
    width: 100%;
    display: flex;
  }
</style>
