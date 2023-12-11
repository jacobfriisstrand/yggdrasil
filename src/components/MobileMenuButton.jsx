function MobileMenuButton() {
  return (
    <div>
      <div
        class="
            z-10
            h-[3px]
            w-8
            bg-accent
            transition-all
            duration-150
            before:absolute
            before:h-[3px]
            before:w-8
            before:-translate-y-2
            before:bg-accent
            before:transition-all
            before:duration-150
            before:content-['']
            after:absolute
            after:h-[3px]
            after:w-8
            after:translate-y-2
            after:bg-accent
            after:transition-all
            after:duration-150 after:content-[''] relative
          "
      ></div>
    </div>
  );
}

export default MobileMenuButton;
