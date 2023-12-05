

function SubmitForm({ children }) {
   function submit(e) {
     e.preventDefault();
   }


  return (
    <form onSubmit={submit}>
      <h2>This is SubmitForm</h2>
      {children}
    </form>
  );
}

export default SubmitForm;
