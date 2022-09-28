export default function ({ store }) {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    store.dispatch('user/setUser', accessToken);
  }
}
