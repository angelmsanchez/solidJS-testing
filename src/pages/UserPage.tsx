import {
  Component,
} from "solid-js";

import { useNavigate } from "solid-app-router";

const UserPage: Component = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/');
  };
  return (
    <div>
      USER PAGE
      <br />
      <br />
      <br />
      <br />
      <button onClick={goTo}>Go to Home</button>
    </div>
  );
};

export default UserPage;
