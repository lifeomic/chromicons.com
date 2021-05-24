import { Radio } from './radio';

export const CategoryFilters = ({ className, onChange, selectedTab }) => {
  const handleOnChange = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      <fieldset>
        <legend className="sr-only">Filter icons by category</legend>
        <div className="flex justify-between items-center space-x-12">
          <Radio
            checked={selectedTab === 'all'}
            className="pt-12 pb-8"
            id="all"
            name="category"
            onChange={handleOnChange}
            text="All"
            value="all"
          />
          <Radio
            checked={selectedTab === 'ui'}
            className="pt-12 pb-8"
            id="ui"
            name="category"
            onChange={handleOnChange}
            text="App / UI"
            value="ui"
          />
          <Radio
            checked={selectedTab === 'science'}
            className="pt-12 pb-8"
            id="science"
            name="category"
            onChange={handleOnChange}
            text="Science"
            value="science"
          />
          <Radio
            checked={selectedTab === 'health'}
            className="pt-12 pb-8"
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
