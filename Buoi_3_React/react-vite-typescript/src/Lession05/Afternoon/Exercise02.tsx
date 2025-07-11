import React from 'react';

type Props = {};

export default function Exercise02({}: Props) {
  const [text, setText] = React.useState('Hello, World!');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div style={{margin: '50px 0 0 100px'}}>
      <h2>Exercise 2: Input Field Tracker</h2>
      <label htmlFor='input-example'>Type something:</label>
      <input id='input-example' value={text} type='text' onChange={handleChange} style={{width: '200px', height: '30px'}}/>
      <p>Input: {text}</p>
    </div>
  );
}