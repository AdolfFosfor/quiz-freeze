export default function ({ store }) {
  if (!store.state.user.account) {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      store.dispatch('user/setUser', accessToken);
    }
  }
}
