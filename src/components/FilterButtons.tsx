import { FilterButtonsProps } from '../types/data';

const FilterButtons: React.FC<FilterButtonsProps> = ({
  data,
  setItem,
  menuItems,
  filterItem,
}) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val: any, id: any) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(data)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default FilterButtons;
