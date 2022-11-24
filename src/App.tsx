import useFetch from './services/useFetch';
import Team from './pages/Team';

function App() {
  const url = 'https://www.mocky.io/v2/5c5adbbf32000052234ec7b2';
  const { response, loading, error } = useFetch(url);

  return (
    <>{response && <Team Data={response} loading={loading} error={error} />}</>
  );
}

export default App;
