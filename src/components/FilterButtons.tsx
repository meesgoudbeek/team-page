import { FilterButtonsProps } from '../types/data';

const FilterButtons: React.FC<FilterButtonsProps> = ({
  data,
  setItem,
  menuItems,
  filterItem,
}) => {
  return (
    <>
      <div className="">
        {menuItems.map((Val: any, id: any) => {
          return (
            <button className="" onClick={() => filterItem(Val)} key={id}>
              {Val}
            </button>
          );
        })}
        <button className="" onClick={() => setItem(data)}>
          All
        </button>
      </div>
    </>
  );
};

export default FilterButtons;
