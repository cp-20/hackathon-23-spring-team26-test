import { useState } from 'react';
interface Todo {
  name: string;
}
export default function TaskList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const addTodo = () => {
    setTodos([...todos, { name: newTodo }]);
  };
  return (
    <div>
      <div>TaskList</div>
      <div>
        {todos.map((todo) => (
          <div key={todo.name}>
            <div className="todo">{todo.name}</div>
          </div>
        ))}
      </div>
      <div>
        <label>
          タスク
          <input
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
            value={newTodo}
          />
        </label>
        <button onClick={addTodo}>add</button>
      </div>
    </div>
  );
}
