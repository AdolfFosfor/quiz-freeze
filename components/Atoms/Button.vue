<template>
  <button
    class="noSelect"
    :style="`${
      $store.state.mobile
        ? 'padding: calc(var(--index) * 2) calc(var(--index) * 2); font-size: calc(var(--index) * 1.1); border-radius: calc(var(--index) * 0.8); width: 70vw'
        : 'padding: calc(var(--index) * 1) calc(var(--index) * 2); font-size: calc(var(--index) * 0.7); border-radius: calc(var(--index) * 0.3);'
    };`"
    @click="$emit('onClick', $event)"
  >
    <nuxt-link v-if="to" :to="to" class="link" />
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      to: {
        type: String,
        default: undefined,
      },
    },
  };
</script>

<style lang="scss" scoped>
  button {
    border: none;
    cursor: pointer;

    font-weight: bold;

    background-color: var(--color-primary);

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
