const TOKEN = localStorage.getItem('accessToken');

export const state = () => ({
  account: false,
  // token: false,
});

export const actions = {
  async setUser({ state, commit }, token) {
    commit('setAccount', []);
    try {
      const response = await fetch(`${process.env.backend}/api/users/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await response.json();
      commit('setAccount', res.response);
    } catch (e) {
      console.error(e);
    }
  },

  async register({ state }, form) {
    const { name, email, password } = form;

    try {
      await fetch(`${process.env.backend}/api/auth/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
    } catch (e) {
      console.error(e);
    }
  },

  async login({ state, dispatch }, form) {
    const { email, password } = form;

    try {
      const response = await fetch(`${process.env.backend}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await response.json();

      localStorage.setItem('accessToken', res.response.accessToken);

      dispatch('setUser', res.response.accessToken);
      await this.$router.push('/account');
    } catch (e) {
      console.error(e);
    }
  },

  async uploadImage({ state, dispatch }, image) {
    const payload = new FormData();
    payload.append('file', image);

    try {
      await fetch(`${process.env.backend}/api/users/profile-image`, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
        body: payload,
      });
      dispatch('setUser', TOKEN);
    } catch (e) {
      console.error(e);
    }
  },
};

export const mutations = {
  setAccount(state, value) {
    state.account = value;
  },
};
