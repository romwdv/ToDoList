import dayjs from "dayjs";
const Task = ({ tableTask, taskdetail, setTableTask, setShowDetail }) => {
  return (
    <div className="taskdetail">
      {tableTask
        .filter((el) => el.id === taskdetail)
        .map((task) => (
          <>
            <h2>{task.title}</h2>
            <div className="controle">
              <div className="taskinfos">
                <h4>
                  Affectée à : <span className="user"> {task.user}</span>
                </h4>
                <h4>
                  Date d'échéance :{" "}
                  <span className="date">
                    {dayjs(task.dateFin).format("DD/MM/YY")}
                  </span>
                </h4>
                <h4>
                  Statut :{" "}
                  <span className={task.active ? "open" : "close"}>
                    {task.active ? "Ouverte" : "Fermée"}
                  </span>
                </h4>
              </div>
              <p>{task.description}</p>
            </div>
            <h3
              onClick={() => {
                const newtab = tableTask.map((t) =>
                  t.id === task.id ? { ...t, active: !t.active } : t,
                );
                setTableTask(newtab);
                setShowDetail(false);
              }}
            >
              {task.active ? "Fermer la tâche" : "Réouvrir la tâche"}
            </h3>
          </>
        ))}
    </div>
  );
};

export default Task;
