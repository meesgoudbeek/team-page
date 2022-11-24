import { useState } from 'react';
import Loader from '../components/Loader';
import Card from '../components/Card';
import FilterButtons from '../components/FilterButtons';
import { FetchProps } from '../types/data';

const Team: React.FC<FetchProps> = ({ Data, loading, error }) => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val: any) => Val.location))];

  const filterItem = (curcat: any) => {
    const newItem = Data.filter((newVal: any) => {
      return newVal.location === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className="container">
      <h1>TEAM</h1>
      <FilterButtons
        filterItem={filterItem}
        setItem={setItem}
        menuItems={menuItems}
        data={Data}
      />
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {Data && (
        <div className="grid-row">
          <Card item={item} />
        </div>
      )}
    </div>
  );
};

export default Team;
