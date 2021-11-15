import {
  Component, onMount,
} from "solid-js";
import { Link } from "solid-app-router";

import styles from "./App.module.css";
import Routes from './components/Routes';

const App: Component = () => {

  onMount(() => {
    console.log('componente montado');
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Link class="nav" href="/">
          Home
        </Link>
        <Link class="nav" href="/users">
          Users
        </Link>
        <Link class="nav" href="/fetch">
          Fetch
        </Link>
      </header>
      <Routes />
    </div>
  );
};

export default App;
