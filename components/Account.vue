<template>
  <div class="account noSelect" :style="spacingStyles" title="Нажмите, чтоб загрузить изображение" @click="$emit('click')">
    <Grid center-j center-i>
      <Grid class="button fade-fast" center-j center-i :style="`background: ${account ? 'var(--color-primary)' : '#a9a9a9'};`">
        <nuxt-link v-if="link" :to="account ? '/account' : '/login'" class="link" />

        <img v-if="!account.media" src="/icons/user.svg" alt="User Icon" style="position: absolute; width: 70%; height: 70%" />
        <picture v-if="account.media" :style="`${loaded ? 'opacity: 1' : 'opacity: 0'}`">
          <img :src="getImageRoute" alt="User Image" style="width: 100%; height: 100%" @load="loaded = true" />
        </picture>

        <input v-if="upload" type="file" @change="$emit('upload', $event.target.files[0])" />
      </Grid>
    </Grid>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import Grid from '@/components/Atoms/Grid';
  import Spacing from '~/components/Modules/Spacing';

  export default {
    name: 'AccountButton',
    components: { Grid },
    extends: Spacing,
    props: {
      link: Boolean,
      upload: Boolean,

      // image: {
      //   type: String,
      //   default: undefined,
      // },
    },
    data: () => ({
      loaded: false,
    }),
    computed: {
      ...mapState('user', ['account']),

      getImageRoute() {
        return `${process.env.backend}${this.account.media.mediaUrl}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .account {
    padding: 3rem 2.5rem;

    .button {
      width: 2.5rem;
      height: 2.5rem;
      overflow: hidden;
      border-radius: 50%;
      cursor: pointer;

      padding: 2rem;
      border: 0.15rem solid transparent;

      transition: all 0.2s ease-in-out;

      transform: scale(1.05);

      //img {
      //  width: 2.5rem;
      //  height: 2.5rem;
      //  object-fit: cover;
      //
      //  position: absolute;
      //
      //  transition: all 0.2s ease-in-out;
      //
      //  transform: scale(1.05);
      //}

      &:hover {
        border: 0.15rem solid var(--color-primary);
        transform: scale(1.2);

        //img {
        //  transform: scale(0.8);
        //}
      }
    }
  }

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }

  picture {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;

    transition: all 200ms ease-in-out;
  }
</style>
