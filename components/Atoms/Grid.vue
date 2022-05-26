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
  `"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Grid',
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
    display: flex;
  }
</style>
