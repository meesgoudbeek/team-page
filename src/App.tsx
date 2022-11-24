import useFetch from './services/useFetch';

function App() {
  const url = 'https://www.mocky.io/v2/5c5adbbf32000052234ec7b2';
  const { response } = useFetch(url);
  console.log(response);

  return (
    <div className="container">
      <h1>TEAM</h1>
      {response && (
        <div className="grid-row">
          {response.map((member: any, index: number) => {
            return (
              <div key={member.name} className="grid-item">
                <div className="card">
                  <div className="card__container">
                    <div className="image">
                      <img src={member.image + '?' + index} alt="Team member" />
                    </div>
                    <div className="content">
                      <p>{member.name}</p>
                      <p>{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
