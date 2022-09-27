<template>
  <div class="account">
    <Grid center-j center-i>
      <Grid class="button fade-fast" center-j center-i>
        <nuxt-link :to="account ? '/account' : '/register'" class="link" />

        <img src="/icons/user.svg" alt="User Icon" />
      </Grid>
    </Grid>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import Grid from '@/components/Atoms/Grid';

  export default {
    name: 'Account',
    components: { Grid },
    computed: {
      ...mapState('user', ['account']),
    },
  };
</script>

<style lang="scss" scoped>
  .account {
    position: absolute;
    top: 0;
    right: 0;

    padding: 3rem 2.5rem;

    .button {
      overflow: hidden;
      background-color: #a9a9a9;
      border-radius: 50%;
      cursor: pointer;

      padding: 2rem;
      border: 0.15rem solid transparent;

      transition: all 0.2s ease-in-out;

      transform: scale(1.05);

      img {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;

        position: absolute;

        transition: all 0.2s ease-in-out;

        transform: scale(1.05);
      }

      &:hover {
        border: 0.15rem solid var(--color-primary);
        transform: scale(1.2);

        img {
          transform: scale(0.8);
        }
      }
    }
  }
</style>
