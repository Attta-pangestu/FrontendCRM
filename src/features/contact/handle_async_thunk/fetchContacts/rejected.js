export default function fetchContactsRejected() {
  return (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  };
}
