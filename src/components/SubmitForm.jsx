

function SubmitForm({ children, submit }) {


  return (
    <form
      onSubmit={submit}
      className=" min-h-screen space-y-10 border-accent p-4 accent-accent"
    >
      {children}
    </form>
  );
}

export default SubmitForm;
