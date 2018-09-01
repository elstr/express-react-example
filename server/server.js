const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let users = [
  {
    id: 1,
    name: "Lele",
    lastName: "Lester",
    groups: [{ id: 1 }, { id: 2 }]
  },
  {
    id: 2,
    name: "Carlos",
    lastName: "Suave Perrito",
    groups: [{ id: 1 }, { id: 2 }]
  },
  {
    id: 3,
    name: "Diego",
    lastName: "Maradona",
    groups: [{ id: 1 }, { id: 2 }]
  }
];
let groups = [
  { id: 1, name: "Admin" },
  { id: 2, name: "Dev" },
  { id: 3, name: "QA" },
  { id: 4, name: "Project Manager" }
];

const { findById, getNewId, getIndexOf } = require("./helpers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Get
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/users", (req, res) => {
  res.json(users);
});
app.get("/groups", (req, res) => {
  res.json(groups);
});
// Get by id
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = findById(users, parseInt(id));
  res.json(user);
});
app.get("/groups/:id", (req, res) => {
  const { id } = req.params;
  const group = findById(groups, parseInt(id));
  res.json(group);
});
// Delete by id
app.delete("/users/delete", (req, res) => {
  const { id } = req.params;
  const index = getIndexOf(users, parseInt(id));
  users.splice(index, 1);
  res.json(user);
});
app.delete("/groups/delete", (req, res) => {
  const { id } = req.params;
  const index = getIndexOf(groups, parseInt(id));
  groups.splice(index, 1);
  res.json(groups);
});
// Add
app.post("/users/add", (req, res) => {
  const { body } = req;
  const newId = getNewId(users);
  const newUser = { id: newId, ...body };
  users = [...users, newUser];
  res.json(users);
});
app.post("/groups/add", (req, res) => {
  const { body } = req;
  const newId = getNewId(groups);
  const newGroup = { id: newId, ...body };
  groups = [...groups, newGroup];
  res.json(groups);
});
// Edit by id
app.patch("/users/edit", (req, res) => {
  const { body } = req;
  console.log({ body });
  const index = getIndexOf(users, parseInt(body.id));
  users = [...users.slice(0, index), body, ...users.slice(index + 1)];
  res.json(users);
});
app.patch("/groups/edit", (req, res) => {
  const { body } = req;
  const index = getIndexOf(groups, parseInt(body.id));
  groups = [...groups.slice(0, index), body, ...groups.slice(index + 1)];
  res.json(groups);
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
