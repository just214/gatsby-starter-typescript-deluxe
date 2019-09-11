import React from "react";

export type SampleProps = { name: string };
export const Sample: React.FC<SampleProps> = ({ name }) => {
  return <h3>Hello {name}</h3>;
};

export default Sample;
