import useFetch from './services/useFetch';
import Team from './pages/Team';
import Loader from './components/Loader';

function App() {
  const url = 'https://www.mocky.io/v2/5c5adbbf32000052234ec7b2';
  const { response, loading, error } = useFetch(url);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong..</p>}
      {response && <Team Data={response} />}
    </>
  );
}

export default App;
