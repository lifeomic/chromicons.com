export const Tile = ({ name, isOpen, children, ...rootProps }) => {
  return (
    <button
      aria-label={`${name} icon`}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className="w-40 rounded-md group relative flex flex-col items-center justify-center text-gray-500 px-12 py-12 text-sm duration-300 ease-in-out transition-transform transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2"
      type="button"
      tabIndex={0}
      {...rootProps}
    >
      {children}
      {name && (
        <span className="absolute bottom-6 opacity-50 text-xs font-bold tracking-wider truncate max-w-full transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          {name}
        </span>
      )}
    </button>
  );
};
