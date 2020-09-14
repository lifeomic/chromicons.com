export const Tile = ({ children, ...rootProps }) => {
  return (
    <button
      className="rounded-md relative flex justify-center px-12 py-12 text-sm duration-300 ease-in-out transition-all transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:-translate-y-1 focus:shadow-lg"
      type="button"
      tabIndex={0}
      {...rootProps}
    >
      {children}
    </button>
  );
};
