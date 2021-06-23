import axios from 'axios';
import React from 'react';

export default function App() {
  const onCLickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      alert(res);
    });
  };
  return (
    <div className="App">
      <button onClick={onCLickFetchData}>データ取得</button>
    </div>
  );
}