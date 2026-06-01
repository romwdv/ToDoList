import daysjs from "dayjs";
import userSpec from "../Components/colors.json";
import { useState } from "react";

const Tasks = ({
  tableTask,
  setTableTask,
  setAddTask,
  setTaskdetail,
  setShowDetail,
}) => {
  console.log(tableTask.length);
  const [filter, setFilter] = useState(null);
  return (
    <div className="taskList">
      <h2>Liste des tâches</h2>
      <div className="control">
        <h3 onClick={() => setAddTask(true)}>Ajouter une tâche</h3>
        <div className="filter">
          <h4 onClick={() => setFilter(null)}>Toutes</h4>
          <h4 onClick={() => setFilter(true)}>Ouvertes</h4>
          <h4 onClick={() => setFilter(false)}>Fermées</h4>
        </div>
      </div>
      {!tableTask.length && (
        <div className="no-task">Pas de tâche à afficher</div>
      )}
      <ul>
        {tableTask
          .slice()
          .filter((el) => filter === null || el.active === filter)
          .sort((a, b) => b.active - a.active)
          .map((task) => (
            <li className="task" id={task.id}>
              <div>
                <input
                  type="checkbox"
                  id={task.id}
                  className="rounded"
                  onClick={() => {
                    const newtab = tableTask.map((t) =>
                      t.id === task.id ? { ...t, active: !t.active } : t,
                    );
                    setTableTask(newtab);
                  }}
                ></input>
                <p id={task.id} className={task.active ? "" : "task-ended"}>
                  {task.title}
                </p>
              </div>
              <div>
                {task.user ? (
                  <p
                    id={task.id}
                    className={`${task.active ? "user" : "user-ended"} ${userSpec.find((el) => el.name === task.user)?.spec.color ?? ""}`}
                  >
                    {task.user}
                  </p>
                ) : (
                  ""
                )}
                <p id={task.id} className={task.active ? "date" : "date-ended"}>
                  {daysjs(task.dateFin).format("DD/MM/YY")}
                </p>
                <span
                  className="detail"
                  onClick={() => {
                    setTaskdetail(task.id);
                    setShowDetail(true);
                  }}
                >
                  Voir détails
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
