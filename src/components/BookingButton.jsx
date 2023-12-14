function BookingButton({ children, onClick, type }) {
  return (
    <button
      className="delay-50 min-w-content active:bg-accent rounded-sm border-2 border-accent px-4 py-2 text-text-light transition ease-in-out hover:bg-accent hover:text-background-light"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BookingButton;
