import { useState } from "react";

const Form = ({ tableTask, setTableTask, setAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [user, setUser] = useState("");
  //   const [errorMessage, setErromessage] = useState("");

  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!title) {
            // setErromessage("Ajouter un titre");
          } else {
            const newtab = [...tableTask];
            newtab.push({
              id: Date.now(),
              title,
              description,
              dateFin,
              date: Date.now(),
              user: user === "false" ? "" : user,
              active: true,
            });
            setTableTask(newtab);
            setAddTask(false);
          }
        }}
      >
        {" "}
        <label htmlFor="title">Titre de la tâche :</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Titre de la tâche"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="description"> Entrer le détail de la tâche</label>
        <textarea
          name="description"
          id="description"
          placeholder="Ajouter une description"
          rows="5"
          cols="33"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label htmlFor="date"></label>
        Sélectionner une date de fin :
        <input
          type="date"
          name="date"
          id="date"
          value={dateFin}
          onChange={(e) => {
            setDateFin(e.target.value);
          }}
        />
        <label htmlFor="user"></label>
        Choisir un utilisateur :
        <select
          name="user"
          id="user"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        >
          <option key="1" value="false">
            Choisir utilisateur
          </option>
          <option key="2" value="Romain">
            Romain
          </option>
          <option key="3" value="Andreas">
            Andreas
          </option>
          <option key="4" value="Olivia">
            Olivia
          </option>
          <option key="5" value="Romy">
            Romy
          </option>
        </select>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;
