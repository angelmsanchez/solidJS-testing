import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
} from "solid-js";

import './HomePage.scss';
import logo from "../logo.svg";
import Basic from '../components/Basic';

const HomePage: Component = () => {
  const [firstName,] = createSignal('Angel');
  const [lastName,] = createSignal('Muñoz');
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  const fullName = createMemo(() => `${firstName()} ${lastName()}`);

  onCleanup(() => clearInterval(timer));

  createEffect(() => console.log("The latest count is", count()));

  return (
    <div className="home-page-container">
      <img src={logo} alt="logo" />
      <h5>{fullName}</h5>
      <h5>Count</h5>
      {count()}
      <Basic value="Prueba Basic Component" />
    </div>
  );
};

export default HomePage;
