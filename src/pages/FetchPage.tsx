import {
  Component,
  createResource,
  For,
  Show,
  Switch,
  Match,
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
    <>
      {/* 1-forma-visualización de datos y errores */}
      <Switch fallback={<div>Loading...</div>}>
        <Match when={data.error}>
          <div>Error</div>
        </Match>
        <Match when={data.loading}>
          <div>Loading...</div>
        </Match>
        <Match when={data()}>
          <For each={data()}>
            {(item: { name: string, image: string }) => (
              <div>
                <h1>{item.name}</h1>
                <img src={item.image} />
              </div>
            )}
          </For>
        </Match>
      </Switch>

      {/* 2-forma-visualización de datos y errores */}
      <Show when={data.loading}>
        <div>Loading...</div>
      </Show>
      <Show when={data.error}>
        <div>Error</div>
      </Show>
      <For each={data()}>
        {(item: { name: string, image: string }) => (
          <div>
            <h1>{item.name}</h1>
            <img src={item.image} />
          </div>
        )}
      </For>

      {/* 3-forma-visualización de datos sin errores */}
      <For each={data()} fallback={<div>Loading...</div>}>
        {(item: { name: string, image: string }) => (
          <div>
            <h1>{item.name}</h1>
            <img src={item.image} />
          </div>
        )}
      </For>
    </>
  );
};

export default FetchPage;
