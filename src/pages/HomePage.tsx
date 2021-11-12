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

  onCleanup(() => clearInterval(timer));

  createEffect(() => console.log("The latest count is", count()));

  const fullName = createMemo(() => `${firstName()} ${lastName()}`);
  const getText = createMemo(() => count() % 2 === 0 ? 'es par' : 'es impar');

  return (
    <div className="home-page-container">
      <img src={logo} alt="logo" />
      <h5>{fullName}</h5>
      {count()}
      <br />
      {getText}
      <Basic value="Prueba Basic Component" />
    </div>
  );
};

export default HomePage;
