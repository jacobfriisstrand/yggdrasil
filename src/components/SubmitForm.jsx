function SubmitForm({ children, submit }) {
  return (
    <form onSubmit={submit}>
      {children}
    </form>
  );
}

export default SubmitForm;
