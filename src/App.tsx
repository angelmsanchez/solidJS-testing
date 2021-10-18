import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
} from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import Basic from './components/Basic';

const App: Component = () => {
  const [firstName,] = createSignal('Angel');
  const [lastName,] = createSignal('Muñoz');
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  const fullName = createMemo(() => `${firstName()} ${lastName()}`);

  onCleanup(() => clearInterval(timer));

  createEffect(() => console.log("The latest count is", count()));

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h5>{fullName}</h5>
        <h5>Count</h5>
        {count()}
        <Basic value="Prueba Basic Component" />
      </header>
    </div>
  );
};

export default App;
