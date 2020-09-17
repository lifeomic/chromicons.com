export const Tile = ({ name, isOpen, children, ...rootProps }) => {
  return (
    <button
      aria-label={`${name} icon`}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className="rounded-md group relative flex flex-col items-center justify-center px-12 py-12 text-sm duration-300 ease-in-out transition-all transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:shadow-outline"
      type="button"
      tabIndex={0}
      {...rootProps}
    >
      {children}
      {name && (
        <span className="absolute tile-hover-text-position opacity-0 text-gray-600 uppercase text-xs font-bold tracking-wider truncate max-w-full transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          {name}
        </span>
      )}
    </button>
  );
};
