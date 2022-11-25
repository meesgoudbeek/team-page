import { FilterButtonsProps } from '../types/data';

const FilterButtons = ({
  data,
  setItem,
  locations,
  filterItem,
}: FilterButtonsProps) => {
  return (
    <>
      <div className="filterButtons">
        <button className="filterButtons__button" onClick={() => setItem(data)}>
          All
        </button>
        {locations.map((Val: any, index: number) => {
          return (
            <button
              className="filterButtons__button"
              onClick={() => filterItem(Val)}
              key={index}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FilterButtons;
