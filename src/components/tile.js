export const Tile = ({ name, isOpen, children, ...rootProps }) => {
  return (
    <button
      aria-label={`${name} icon`}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className="rounded-md border-none relative flex justify-center px-12 py-12 text-sm duration-300 ease-in-out transition-all transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:shadow-outline"
      type="button"
      tabIndex={0}
      {...rootProps}
    >
      {children}
    </button>
  );
};
