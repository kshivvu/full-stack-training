import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function addTodo(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  }

  function removeTodo(idx: number) {
    setTodos(todos.filter((_, i) => i !== idx));
  }

  return (
    <div
      style={{ maxWidth: 320, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h2>Todo App</h2>
      <form onSubmit={addTodo} style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo..."
          style={{ flex: 1, padding: 6 }}
        />
        <button type="submit" style={{ padding: "6px 12px" }}>
          Add
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {todos.length === 0 && <li style={{ color: "#888" }}>No todos yet.</li>}
        {todos.map((todo, idx) => (
          <li
            key={idx}
            style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
          >
            <span style={{ flex: 1 }}>{todo}</span>
            <button onClick={() => removeTodo(idx)} style={{ marginLeft: 8 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
