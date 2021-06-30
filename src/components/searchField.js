import { Search, XCircle } from '@lifeomic/chromicons';
import { useState } from 'react';
import clsx from 'clsx';

export const SearchField = ({ className, inputClassName, onChange }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <form
      className={clsx('relative flex justify-end', className)}
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
          onChange={(e) => {
            setSearchText(e.target.value);
            onChange?.(e.target.value);
          }}
          value={searchText}
        />
        <div className="absolute flex items-center text-gray-400 justify-center mt-3 ml-3">
          <Search className="fill-current h-5 w-5" />
        </div>

        <button
          className={clsx(
            'absolute right-3 top-0 bottom-0 invisible focus:outline-none focus-visible:ring-2',
            searchText?.length > 0 && 'visible'
          )}
          aria-label="Clear search"
          onClick={() => {
            setSearchText('');
            onChange?.('');
          }}
        >
          <XCircle
            className="h-5 w-5 opacity-75 hover:opacity-100"
            aria-hidden
          />
        </button>
      </div>
    </form>
  );
};
