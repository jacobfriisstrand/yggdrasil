function BookingButton({ children, onClick, type, disabled }) {
  return (
    <button
      className="delay-50 min-w-content flex gap-4 items-center rounded-full border-2 border-accent px-4 py-2 text-text-light transition ease-in-out hover:bg-accent hover:text-background-light active:bg-accent disabled:pointer-events-none disabled:opacity-25"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default BookingButton;
