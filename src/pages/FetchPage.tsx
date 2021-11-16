import {
  Component,
  createResource,
} from "solid-js";

const fetchData = () => {
  return fetch('https://rickAndmortyapi.com/api/character')
    .then(res => res.json())
    .then(response => {
      return response.results;
    });
};


const FetchPage: Component = () => {
  const [data, { mutate, refetch }] = createResource(fetchData, { initialValue: [] });

  return (
    <div className="fetch-page-container">
      {data().map(result => (
        <div>
          <h1>{result.name}</h1>
          <img src={result.image} />
        </div>
      ))}
    </div>
  );
};

export default FetchPage;
