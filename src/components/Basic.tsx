import { Component } from "solid-js";

interface Props {
  value: string;
}

const Basic = (props: Props) => {
  const value = props.value || "default";

  return <div>{value}</div>;
};

export default Basic;
