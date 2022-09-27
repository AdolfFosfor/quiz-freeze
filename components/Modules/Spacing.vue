<script>
  export default {
    name: 'Spacing',

    props: {
      // width: {
      //   type: [String, Number],
      //   default: undefined,
      // },

      py: {
        type: [String, Number],
        default: 0,
      },
      px: {
        type: [String, Number],
        default: 0,
      },
      pr: {
        type: [String, Number],
        default: 0,
      },
      pb: {
        type: [String, Number],
        default: 0,
      },
      pl: {
        type: [String, Number],
        default: 0,
      },

      my: {
        type: [String, Number],
        default: 0,
      },
      mx: {
        type: [String, Number],
        default: 0,
      },
      mt: {
        type: [String, Number],
        default: 0,
      },
      mr: {
        type: [String, Number],
        default: 0,
      },
      mb: {
        type: [String, Number],
        default: 0,
      },
      ml: {
        type: [String, Number],
        default: 0,
      },
    },

    computed: {
      spacingStyles() {
        let styles = ``;

        // if (this.width) styles = `${styles} width: ${this.width}%;`;

        if (this.py) styles = `${styles} padding-top: ${this.py}rem; padding-bottom: ${this.py}rem;`;
        if (this.px) styles = `${styles} padding-right: ${this.px}rem; padding-left: ${this.px}rem;`;
        if (this.pt) styles = `${styles} padding-top: ${this.pt}rem;`;
        if (this.pr) styles = `${styles} padding-right: ${this.pr}rem;`;
        if (this.pb) styles = `${styles} padding-bottom: ${this.pb}rem;`;
        if (this.pl) styles = `${styles} padding-left: ${this.pl}rem;`;
        if (this.mx) styles = `${styles} margin-right: ${this.mx}rem; margin-left: ${this.mx}rem;`;
        if (this.my) styles = `${styles} margin-top: ${this.my}rem; margin-bottom: ${this.my}rem;`;
        if (this.mt) styles = `${styles} margin-top: ${this.mt}rem;`;
        if (this.mr) styles = `${styles} margin-right: ${this.mr}rem;`;
        if (this.mb) styles = `${styles} margin-bottom: ${this.mb}rem;`;
        if (this.ml) styles = `${styles} margin-left: ${this.ml}rem;`;

        return styles;
      },
    },
  };
</script>
