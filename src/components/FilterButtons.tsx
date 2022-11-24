import { FilterButtonsProps } from '../types/data';

const FilterButtons: React.FC<FilterButtonsProps> = ({
  data,
  setItem,
  menuItems,
  filterItem,
}) => {
  return (
    <>
      <div className="filterButtons">
        <button className="filterButtons__button" onClick={() => setItem(data)}>
          All
        </button>
        {menuItems.map((Val: any, id: any) => {
          return (
            <button
              className="filterButtons__button"
              onClick={() => filterItem(Val)}
              key={id}
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
