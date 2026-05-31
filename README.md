# ✅ ToDoList — Application React

> Application de gestion de tâches réalisée dans le cadre d'une formation chez **Le Reacteur**.
> ⚠️ Il s'agit d'un exercice.
>
> - La mise en page n'est pas finalisée.
> - Pas de backend pour le moment.

---

## 📋 Présentation

Ce projet est une application de gestion de tâches (To-Do List) construite avec React. Elle permet de :

- **Créer** des tâches avec titre, description, date de fin et utilisateur assigné
- **Filtrer** les tâches par statut (Toutes / Ouvertes / Fermées)
- **Marquer** une tâche comme terminée via une checkbox
- **Voir le détail** d'une tâche
- **Trier** automatiquement les tâches actives en premier

---

## 🛠️ Technologies utilisées

| Technologie | Usage                                     |
| ----------- | ----------------------------------------- |
| React       | Framework UI, gestion des états           |
| Day.js      | Formatage des dates                       |
| CSS3        | Styles et mise en page                    |
| JSON        | Données statiques (couleurs utilisateurs) |

---

## 🗂️ Structure du projet

```
📁 ToDoList/
├── 📁 src/
│   ├── App.jsx
│   └── 📁 Components/
│       ├── Tasks.jsx
│       ├── Form.jsx
│       ├── Detail.jsx
│       └── colors.json
├── 📁 public/
└── package.json
```

---

## ⚙️ Fonctionnalités

### Gestion des tâches

- Ajout d'une tâche via un formulaire (titre, description, date de fin, utilisateur)
- Checkbox pour basculer le statut `active` d'une tâche
- Tri automatique : les tâches ouvertes apparaissent en premier

### Filtres

| Filtre   | Comportement                       |
| -------- | ---------------------------------- |
| Toutes   | Affiche toutes les tâches          |
| Ouvertes | Affiche uniquement `active: true`  |
| Fermées  | Affiche uniquement `active: false` |

### Couleurs par utilisateur

Chaque utilisateur se voit attribuer une couleur définie dans `colors.json` et appliquée dynamiquement en className.

---

## 🚀 Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/romwdv/ToDoList.git

# Installer les dépendances
cd ToDoList
yarn

# Lancer le projet
yarn dev
```

---

## 👤 Auteur

Exercice réalisé par **Romain** dans le cadre de la formation **[Le Reacteur](https://www.lereacteur.io/)**.
