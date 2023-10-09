import "./App.css";
import { useState } from "react";

function App() {
  const [todolist, settodolist] = useState([]);
  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      TaskName: newTask,
    };
    settodolist([...todolist, task]);
    clearTask();
  };

  const clearTask = () => {
    document.getElementById("inputText").value = "";
  };

  const deleteTask = (id) => {
    settodolist(todolist.filter((task) => task.id !== id));
  };

  return (
    <div className="name" style={{ alignItems: "center" }}>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h6 className="animate-charcter"> ToDo List</h6>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="input-field">
          <input 
            onChange={handleChange}
            type="text"
            required
            spellcheck="false"
            id="inputText"
          />
          <label>Enter Message</label>
        </div>
        <button className="glowing-btn glowing-btn-center" onClick={addTask} >
          <span className="glowing-txt">
            A<span className="faulty-letter">D</span>D TasK
          </span>
        </button>
      </div>

      <div className="List">
        {todolist.map((task) => {
          return (
            <div className="floating ">
              <h2 className="textorder">{task.TaskName}</h2>
              <div className="glowing-btn-float">
              <button onClick={() => deleteTask(task.id)} className="glowing-btn">
                {task.id.value}
                <span className="glowing-txt">
                  De<span className="faulty-letter">le</span>te
                </span>
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
