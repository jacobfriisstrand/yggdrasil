function SubmitForm({ children, submit }) {
  return (
    <form onSubmit={submit}>
      <h2>This is SubmitForm</h2>
      {children}
    </form>
  );
}

export default SubmitForm;
