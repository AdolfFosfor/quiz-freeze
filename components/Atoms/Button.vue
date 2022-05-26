<template>
  <button
    class="noSelect fade-fast"
    :style="`${
      $store.state.mobile ? 'font-size: calc(var(--index) * 1.1); width: 70vw' : 'font-size: calc(var(--index) * 0.7)'
    };`"
    @click="$emit('onClick', $event)"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'Button',
  };
</script>

<style lang="scss" scoped>
  button {
    border: none;
    cursor: pointer;

    font-weight: bold;

    background-color: var(--color-primary);
    padding: calc(var(--index) * 1) calc(var(--index) * 2);

    border-radius: calc(var(--index) * 0.3);

    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(1.2);
      transform: translateY(-2px);
    }

    &:active {
      filter: brightness(1.1);
      transform: translateY(2px);
    }
  }
</style>
