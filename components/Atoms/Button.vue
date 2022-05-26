<template>
  <button
    class="noSelect"
    :style="`${
      $store.state.mobile ? 'font-size: calc(var(--index) * 1.1); width: 70vw' : 'font-size: calc(var(--index) * 0.7)'
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

  .link {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    width: 100%;
    height: 100%;
  }
</style>
