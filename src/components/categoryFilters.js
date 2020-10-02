import { Radio } from './radio';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const CategoryFilters = ({ className, onChange }) => {
  const router = useRouter();

  // On mount, get our `tab` query param
  // NOTE: For whatever reason `router.query` is not updated on initial render.
  //       Will file an issue / dig in some more!
  const [selectedOption, setSelectedOption] = useState(() => {
    const params = new URLSearchParams(router.asPath.replace('/', ''));
    const tab = params.get('tab');

    return tab || 'all';
  });

  const handleOnChange = (e) => {
    router.push({
      query: e.target.value !== 'all' ? { tab: e.target.value } : {},
    });
    setSelectedOption(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      <fieldset role="radiogroup">
        <legend className="sr-only">Filter icons by category</legend>
        <div className="flex justify-between items-center space-x-12">
          <Radio
            checked={selectedOption === 'all'}
            className="py-8"
            id="all"
            name="category"
            onChange={handleOnChange}
            text="All"
            value="all"
          />
          <Radio
            checked={selectedOption === 'ui'}
            className="py-8"
            id="ui"
            name="category"
            onChange={handleOnChange}
            text="App / UI"
            value="ui"
          />
          <Radio
            checked={selectedOption === 'science'}
            className="py-8"
            id="science"
            name="category"
            onChange={handleOnChange}
            text="Science"
            value="science"
          />
          <Radio
            checked={selectedOption === 'health'}
            className="py-8"
            id="health"
            name="category"
            onChange={handleOnChange}
            text="Health"
            value="health"
          />
        </div>
      </fieldset>
    </form>
  );
};
