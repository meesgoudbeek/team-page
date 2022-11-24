import useFetch from './services/useFetch';
import Loader from './components/Loader';
import { Member } from './types/member';

function App() {
  const url = 'https://www.mocky.io/v2/5c5adbbf32000052234ec7b2';
  const { response, loading, error } = useFetch(url);

  return (
    <div className="container">
      <h1>TEAM</h1>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {response && (
        <div className="grid-row">
          {response.map((member: Member, index: number) => {
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
                      <p>{member.tags}</p>
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
