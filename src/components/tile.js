export const Tile = ({ isOpen, children, ...rootProps }) => {
  return (
    <button
      aria-haspopup="true"
      aria-expanded={isOpen}
      className="rounded-md relative flex justify-center px-12 py-12 text-sm duration-300 ease-in-out transition-all transform hover:-translate-y-1 hover:shadow-lg focus:outline-none"
      type="button"
      tabIndex={0}
      {...rootProps}
    >
      {children}
    </button>
  );
};
