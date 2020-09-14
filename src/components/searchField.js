export const SearchField = ({ onChange }) => {
  return (
    <form
      className="relative flex items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="sr-only" htmlFor="search-icons" aria-hidden>
        Search icons
      </label>
      <input
        id="search-icons"
        type="search"
        placeholder="Search icons"
        className="appearance-none border border-grey bg-gray-200 rounded-lg pl-8 pr-4 py-2 text-black focus:outline-none focus:border-purple-400"
        onChange={onChange}
      />
      <div className="absolute pin-y pin-l pl-3 flex items-center justify-center">
        <svg
          className="fill-current text-grey h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
        </svg>
      </div>
    </form>
  );
};
