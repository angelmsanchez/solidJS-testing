import {
  Component,
} from "solid-js";
import { Link } from "solid-app-router";

import styles from "./App.module.css";
import Routes from './components/Routes';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Link class="nav" href="/">
          Home
        </Link>
        <Link class="nav" href="/users">
          Users
        </Link>
        <Routes />
      </header>
    </div>
  );
};

export default App;
