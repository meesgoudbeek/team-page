import { useState } from 'react';
import Card from '../components/Card';
import FilterButtons from '../components/FilterButtons';

const Team = ({ Data }: any) => {
  const [item, setItem] = useState(Data);

  const locations = [...new Set(Data.map((Val: any) => Val.location))];

  const filterItem = (curcat: any) => {
    const newItem = Data.filter((newVal: any) => {
      return newVal.location === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className="container">
      <header>
        <h1>TEAM</h1>
        <FilterButtons
          filterItem={filterItem}
          setItem={setItem}
          locations={locations}
          data={Data}
        />
      </header>
      {Data && (
        <div className="grid-row">
          <Card item={item} />
        </div>
      )}
    </div>
  );
};

export default Team;
