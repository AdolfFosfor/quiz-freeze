<template>
  <button class="noSelect" :type="submit ? 'submit' : 'button'" :style="spacingStyles" @click="$emit('onClick', $event)">
    <nuxt-link v-if="to" :to="to" class="link" />
    <slot />
  </button>
</template>

<script>
  import Spacing from '~/components/Modules/Spacing';

  export default {
    name: 'Button',
    extends: Spacing,
    props: {
      to: {
        type: String,
        default: undefined,
      },

      submit: Boolean,
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

    padding: 1rem 5rem;
    border-radius: 0.8rem;

    @media only screen and (max-width: 768px) {
      padding: 1.6rem;
      font-size: 1.2rem;
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
