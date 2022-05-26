<template>
  <div ref="page" class="account">
    <Grid center-j center-i>
      <Grid class="button fade-fast" center-j center-i>
        <nuxt-link to="/account" class="link" />

        <img
          src="https://images.unsplash.com/photo-1622615875737-0d959726e947?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"
          alt="Arab"
        />
      </Grid>
    </Grid>
  </div>
</template>

<script>
  import Grid from '@/components/Atoms/Grid';
  export default {
    name: 'Account',
    components: { Grid },

    mounted() {
      this.$refs.page.classList.add('fade-in');
    },

    beforeDestroy() {
      this.$refs.page.classList.remove('fade-in');
      this.$refs.page.classList.add('fade-out');
    },
  };
</script>

<style lang="scss" scoped>
  .account {
    position: absolute;
    top: 0;
    right: 0;

    padding: calc(var(--index) * 3) calc(var(--index) * 2.5);

    .button {
      overflow: hidden;
      background-color: #a9a9a9;
      border-radius: 50%;
      cursor: pointer;

      padding: calc(var(--index) * 2);
      border: calc(var(--index) * 0.15) solid transparent;

      transition: all 0.2s ease-in-out;

      transform: scale(1.05);

      img {
        width: calc(var(--index) * 6);
        height: calc(var(--index) * 6);
        object-fit: cover;

        position: absolute;

        transition: all 0.2s ease-in-out;

        transform: scale(1.05);
      }

      &:hover {
        border: calc(var(--index) * 0.15) solid var(--color-primary);
        transform: scale(1.2);

        img {
          transform: scale(0.8);
        }
      }
    }
  }
</style>
