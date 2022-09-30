<template>
  <div :is="whatIs" class="words" :style="textStyles + spacingStyles">
    <slot />
  </div>
</template>

<script>
  import Spacing from '~/components/Modules/Spacing';

  export default {
    name: 'Words',
    extends: Spacing,
    props: {
      size: {
        type: [String, Number],
        default: undefined,
      },
      weight: {
        type: [String, Number],
        default: undefined,
      },

      h1: Boolean,
      h2: Boolean,
      h3: Boolean,
      h4: Boolean,
      h5: Boolean,
      h6: Boolean,

      uppercase: Boolean,
      underline: Boolean,
    },
    computed: {
      whatIs() {
        let type = 'p';

        if (this.h1) type = 'h1';
        if (this.h2) type = 'h2';
        if (this.h3) type = 'h3';
        if (this.h4) type = 'h4';
        if (this.h5) type = 'h5';
        if (this.h6) type = 'h6';

        return type;
      },

      textStyles() {
        let styles = 'font-size: 1rem; font-weight: 400;';

        if (this.h1) styles = `${styles} font-size: 5rem; font-weight: 800;`;
        if (this.h2) styles = `${styles} font-size: 4rem; font-weight: 800;`;
        if (this.h3) styles = `${styles} font-size: 3rem; font-weight: 700;`;
        if (this.h4) styles = `${styles} font-size: 2.5rem; font-weight: 700;`;
        if (this.h5) styles = `${styles} font-size: 2rem; font-weight: 600;`;
        if (this.h6) styles = `${styles} font-size: 1.5rem; font-weight: 600;`;
        if (this.uppercase) styles = `${styles} text-transform: uppercase;`;
        if (this.underline) styles = `${styles} text-decoration: underline;`;
        // else styles = `${styles} font-size: 1rem; font-weight: 400;`;

        if (this.size) styles = `${styles} font-size: ${this.size}rem;`;
        if (this.weight) styles = `${styles} font-weight: ${this.weight}00;`;

        return styles;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .words {
    transition: all 200ms ease-in-out;
  }
</style>
