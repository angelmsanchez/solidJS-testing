import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
} from "solid-js";


const FetchPage: Component = () => {
  const [results, setResults] = createSignal([]);

  fetch('https://rickAndmortyapi.com/api/character')
    .then(res => res.json())
    .then(response => setResults(response.results));

  return (
    <div className="fetch-page-container">
      {results().map(result => (
        <div>
          <h1>{result.name}</h1>
          <img src={result.image} />
        </div>
      ))}
    </div>
  );
};

export default FetchPage;
