<template>
  <div ref="pagination" class="pagination smooth-in noSelect">{{ $route.params.id }} / 30</div>
</template>

<script>
  export default {
    name: 'Pagination',
  };
</script>

<style lang="scss" scoped>
  .pagination {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;

    font-size: calc(var(--index) * 2);
    padding: calc(var(--index) * 4) calc(var(--index) * 0.5);

    font-weight: 900;

    transform: rotate(90deg);
  }
</style>
