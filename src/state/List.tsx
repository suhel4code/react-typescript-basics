import React, { useState } from 'react';

const List: React.FC = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState<string[]>([]);

  const onAdd = () => {
    setList([...list, name]);
    setName('');
  };

  return (
    <div>
      <h1>Party List</h1>
      {list.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <input
        type='text'
        style={{ padding: '10px' }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAdd}>Add </button>
    </div>
  );
};

export default List;
