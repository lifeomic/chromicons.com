import { Search } from '@lifeomic/chromicons';
import clsx from 'clsx';

export const SearchField = ({ className, inputClassName, onChange, value }) => {
  return (
    <form
      className={clsx('relative flex items-center', className)}
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="sr-only" htmlFor="search-icons" aria-hidden>
        Search icons
      </label>
      <input
        id="search-icons"
        type="search"
        placeholder="Search icons"
        className={clsx(
          'appearance-none border border-grey bg-gray-200 rounded-lg pl-10 pr-4 py-2 text-black focus:outline-none focus:border-purple-400',
          inputClassName
        )}
        onChange={onChange}
        value={value}
      />
      <div className="absolute pl-3 flex items-center justify-center">
        <Search className="fill-current text-grey h-4 w-4" />
      </div>
    </form>
  );
};
