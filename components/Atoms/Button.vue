<template>
  <button class="noSelect" @click="$emit('onClick', $event)">
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
    width: 100%;

    border: none;
    cursor: pointer;

    font-weight: bold;

    background-color: var(--color-primary);

    transition: all 0.2s ease-in-out;

    padding: calc(var(--index) * 1);
    border-radius: calc(var(--index) * 0.6);

    @media only screen and (max-width: 768px) {
      padding: calc(var(--index) * 1.6);
      font-size: calc(var(--index) * 1.2);
    }

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
