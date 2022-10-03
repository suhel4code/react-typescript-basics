import React, { PropsWithChildren } from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

const person = {
  name: 'Suhel',
  age: 22,
};

export const Child = (props: ChildProps) => {
  return <h3 onClick={props.onClick}>{props.color}</h3>;
};

export const ChildFc: React.FC<PropsWithChildren<ChildProps>> = (props) => {
  return <h3 onClick={props.onClick}>{props.children}</h3>;
};

Child.displayName = 'Child With Fc';
