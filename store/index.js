export const state = () => ({
  mobile: false,
});

export const mutations = {
  setMobile(state, value) {
    state.mobile = value;
  },
};
