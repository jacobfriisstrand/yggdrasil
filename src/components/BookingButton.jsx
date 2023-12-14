function BookingButton({ children, onClick, type, disabled }) {
  return (
    <button
      className="disabled:opacity-25 disabled:pointer-events-none delay-50 min-w-content active:bg-accent rounded-full border-2 border-accent px-4 py-2 text-text-light transition ease-in-out hover:bg-accent hover:text-background-light"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default BookingButton;
