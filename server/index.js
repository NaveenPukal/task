const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middelware
app.use(cors());
app.use(express.json());

//ROUTES

//TEST

app.get("/test", (req, res) => {
  res.send("helloooo");
});
//CREATE EMPLOYEE

app.post("/employee", async (req, res) => {
  try {
    const { description } = req.body;
    const newEmployee = await pool.query(
      "INSERT INTO employees (description) VALUES($1) RETURNING * ",
      [description]
    );
    res.json(newEmployee.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//GET ALL EMPLOYEE

app.get("/getemployee", async (req, res) => {
  try {
    const allEmployees = await pool.query("SELECT * FROM EMPLOYEES");
    res.json(allEmployees.rows);
  } catch (error) {
    console.error(err.message);
  }
});

//GET A EMPLOYEE

app.get("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await pool.query(
      "SELECT * FROM employees WHERE employee_id=$1",
      [id]
    );
    res.json(employee.rows[0]);
  } catch (error) {
    console.error(err.message);
  }
});

//UPDATE A EMPLOYEE

//DELETE A EMPLOYEE

app.listen(5000, () => {
  try {
    console.log("server has started port 5000");
  } catch (err) {
    console.error(err.message, "sckjsnckscnskcnskn");
  }
});
