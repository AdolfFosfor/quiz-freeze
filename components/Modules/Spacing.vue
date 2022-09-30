<script>
  export default {
    name: 'Spacing',

    props: {
      position: {
        type: String,
        default: undefined,
      },

      width: {
        type: [String, Number],
        default: undefined,
      },

      round: {
        type: [String, Number],
        default: undefined,
      },

      p: {
        type: [String, Number],
        default: 0,
      },

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

      m: {
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

      t: {
        type: [String, Number],
        default: 0,
      },
      r: {
        type: [String, Number],
        default: 0,
      },
      b: {
        type: [String, Number],
        default: 0,
      },
      l: {
        type: [String, Number],
        default: 0,
      },

      ta: {
        type: [String, Number],
        default: 0,
      },
      ra: {
        type: [String, Number],
        default: 0,
      },
      ba: {
        type: [String, Number],
        default: 0,
      },
      la: {
        type: [String, Number],
        default: 0,
      },
    },

    computed: {
      spacingStyles() {
        let styles = ``;

        if (this.width) styles = `${styles} width: ${this.width}%;`;
        if (this.round) styles = `${styles} border-radius: ${this.round / 10}rem;`;
        if (this.position) styles = `${styles} position: ${this.position};`;

        if (this.p) styles = `${styles} padding: ${this.p}rem;`;

        if (this.py) styles = `${styles} padding-top: ${this.py}rem; padding-bottom: ${this.py}rem;`;
        if (this.px) styles = `${styles} padding-right: ${this.px}rem; padding-left: ${this.px}rem;`;
        if (this.pt) styles = `${styles} padding-top: ${this.pt}rem;`;
        if (this.pr) styles = `${styles} padding-right: ${this.pr}rem;`;
        if (this.pb) styles = `${styles} padding-bottom: ${this.pb}rem;`;
        if (this.pl) styles = `${styles} padding-left: ${this.pl}rem;`;

        if (this.m) styles = `${styles} margin: ${this.m}rem;`;

        if (this.mx) styles = `${styles} margin-right: ${this.mx}rem; margin-left: ${this.mx}rem;`;
        if (this.my) styles = `${styles} margin-top: ${this.my}rem; margin-bottom: ${this.my}rem;`;
        if (this.mt) styles = `${styles} margin-top: ${this.mt}rem;`;
        if (this.mr) styles = `${styles} margin-right: ${this.mr}rem;`;
        if (this.mb) styles = `${styles} margin-bottom: ${this.mb}rem;`;
        if (this.ml) styles = `${styles} margin-left: ${this.ml}rem;`;

        if (this.t) styles = `${styles} top: ${this.t}rem;`;
        if (this.r) styles = `${styles} right: ${this.r}rem;`;
        if (this.b) styles = `${styles} bottom: ${this.b}rem;`;
        if (this.l) styles = `${styles} left: ${this.l}rem;`;

        if (this.ta) styles = `${styles} top: ${this.ta}%;`;
        if (this.ra) styles = `${styles} right: ${this.ra}%;`;
        if (this.ba) styles = `${styles} bottom: ${this.ba}%;`;
        if (this.la) styles = `${styles} left: ${this.la}%;`;

        return styles;
      },
    },
  };
</script>
