import "./App.css";

import { useState } from "react";
import Form from "./Components/Form";
import Tasks from "./Components/Tasks";
import Task from "./Components/Task";

function App() {
  const [tableTask, setTableTask] = useState([]);
  const [taskdetail, setTaskdetail] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [addTask, setAddTask] = useState(false);

  console.log(tableTask);
  return (
    <div className="container">
      {addTask && (
        <Form
          tableTask={tableTask}
          setTableTask={setTableTask}
          setAddTask={setAddTask}
        />
      )}
      {!addTask && !showDetail && (
        <Tasks
          tableTask={tableTask}
          setTableTask={setTableTask}
          setAddTask={setAddTask}
          setTaskdetail={setTaskdetail}
          setShowDetail={setShowDetail}
        />
      )}
      {showDetail && (
        <Task
          setTableTask={setTableTask}
          tableTask={tableTask}
          taskdetail={taskdetail}
          setShowDetail={setShowDetail}
        />
      )}
    </div>
  );
}

export default App;
