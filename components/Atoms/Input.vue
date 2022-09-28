<template>
  <Grid column>
    <label v-if="label" :for="label + type">{{ label }}</label>

    <input
      :id="label + type"
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      @focusin="focus = true"
      @focusout="focus = false"
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

      required: Boolean,
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
  };
</script>

<style lang="scss" scoped>
  label {
    opacity: 0.5;
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  input {
    width: 100%;

    font-size: 0.8rem;
    line-height: 3rem;

    font-weight: 600;
    padding: 0 1.5rem;
    border-radius: 0.8rem;
    border: 0.1rem dashed transparent;
    background: rgba(255, 255, 255, 0.1);

    margin-bottom: 1rem;
    transition: all 0.2s ease-in-out;

    &:focus {
      border: 0.1rem dashed var(--color-primary);
      background: rgba(255, 255, 255, 0.15);
    }

    //&:not(:focus):not(:placeholder-shown):valid {
    //  border-color: #e33c3c;
    //}
  }
</style>
