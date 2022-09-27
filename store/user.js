export const state = () => ({
  account: false,
  // token: false,
});

export const actions = {
  async register({ state }, value) {
    const { name, email, password } = value;

    console.log(
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    try {
      await fetch(`${process.env.backend}/auth/registration`, {
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
};

export const mutations = {
  setUser(state, value) {
    state.user = value;
  },
};
