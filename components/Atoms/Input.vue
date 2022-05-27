<template>
  <Grid column style="width: 100%">
    <label v-if="label" for="input">{{ label }}</label>

    <input
      id="input"
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      @focusin="focus = true"
      @focusout="focus = false"
      @keydown="name ? format($event) : undefined"
    />
  </Grid>
</template>

<script>
  import Grid from '~/components/Atoms/Grid';
  export default {
    name: 'Input',
    components: { Grid },
    props: {
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: undefined,
      },

      name: Boolean,
      error: Boolean,
    },
    data: () => ({
      focus: false,
      value: '',
    }),
    watch: {
      value(newValue) {
        this.$emit('input', newValue);
      },
    },
    methods: {
      format(e) {
        return /[a-z]/i.test(e.key) ? true : e.preventDefault();
      },
    },
  };
</script>

<style lang="scss" scoped>
  label {
    opacity: 0.5;
    font-size: calc(var(--index) * 0.8);
    margin-bottom: calc(var(--index) * 0.4);

    @media only screen and (max-width: 768px) {
      font-size: calc(var(--index) * 1.2);
    }
  }

  input {
    width: 100%;

    font-size: calc(var(--index) * 1);
    font-weight: 600;
    padding: calc(var(--index) * 0.8) calc(var(--index) * 1.2);
    border-radius: calc(var(--index) * 0.8);
    border: calc(var(--index) * 0.1) dashed transparent;
    background: rgba(255, 255, 255, 0.1);

    margin-bottom: calc(var(--index) * 1);
    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: 768px) {
      font-size: calc(var(--index) * 1.8);
    }

    &:focus {
      border: calc(var(--index) * 0.1) dashed var(--color-primary);
      background: rgba(255, 255, 255, 0.15);
    }
  }
</style>
