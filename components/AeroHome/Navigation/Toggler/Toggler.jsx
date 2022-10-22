export const Toggler = (props) => {
  return (
    <>
      <span
        className={
          props.openMenu
            ? `rotate-[-135deg] bg-zeddblue w-[2rem] h-[2px] absolute top-[3px] mt-[0.5rem] right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
            : ` w-[2rem] h-[2px] bg-zeddblue absolute mt-[0.5rem] right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
        }
      />

      <span
        className={
          props.openMenu
            ? `w-[2rem] h-[2px] bg-none absolute  right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
            : ` w-[2rem] h-[2px] bg-zeddblue absolute right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
        }
      />

      <span
        className={
          props.openMenu
            ? `rotate-[135deg] bg-zeddblue w-[2rem] h-[2px] absolute mt-[1rem] top-[-5px] right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
            : ` w-[2rem] h-[2px] bg-zeddblue absolute mt-[1rem] right-0 transition-[all 1s ease-in-out] md:hidden sm:block `
        }
      />
    </>
  );
};
