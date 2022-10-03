import React, { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Suhel', age: 22 },
  { name: 'Nadeem', age: 23 },
];

const UseRef: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    const foundUser = users.find((item) => item.name === name);
    console.log(foundUser);
    setUser(foundUser);
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Search User</h1>
      <input
        ref={inputRef}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UseRef;
