import axios from 'axios';
import React, { useState } from 'react';
import { Todo2 } from './Todo2';
import { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';

const user = {
  name: "ゆう",
  hobbies: ["映画", "ゲーム"],
}

export default function App() {
  const [ todos, setTodos ] = useState<Array<TodoType>>([]);

  const onCLickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
    setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <button onClick={onCLickFetchData}>データ取得</button>
      <Text color="red" fontSize="18px" />
      {todos.map((todo) => (
        <Todo2 key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}