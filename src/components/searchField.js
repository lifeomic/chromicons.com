import { Search } from '@lifeomic/chromicons';
import clsx from 'clsx';

export const SearchField = ({ className, inputClassName, onChange, value }) => {
  return (
    <form
      className={clsx('relative flex items-center justify-center', className)}
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="sr-only" htmlFor="search-icons" aria-hidden>
        Search icons
      </label>
      <div className="relative flex w-full md:w-auto">
        <input
          id="search-icons"
          type="search"
          placeholder="Search icons"
          className={clsx(
            'appearance-none border border-grey bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-black focus:outline-none focus:border-purple-400',
            inputClassName
          )}
          onChange={onChange}
          value={value}
        />
        <div className="absolute flex items-center text-gray-400 justify-center mt-3 ml-3">
          <Search className="fill-current h-5 w-5" />
        </div>
      </div>
    </form>
  );
};
