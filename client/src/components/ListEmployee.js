import React, { useState, useEffect } from "react";
import EditEmployee from "./EditEmployee";

export default function ListEmployee() {
  const [employees, setEmployees] = useState([]);

  //delete employee

  const deleteEmployee = async (employee_id) => {
    const deleteEmployee = await fetch(
      `http://localhost:5000/delete/${employee_id}`,
      {
        method: "DELETE",
      }
    );
    setEmployees(
      employees.filter((employee) => employee.employee_id !== employee_id)
    );
    try {
    } catch (err) {
      console.error(err.message);
    }
  };
  const getEmployee = async () => {
    try {
      const response = await fetch("http://localhost:5000/getemployee");
      const jsonData = await response.json();
      //   console.log(jsonData);
      setEmployees(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getEmployee();
  }, []);
  console.log(employees);
  return (
    <div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employees) => (
            <tr key={employees.employee_id}>
              <td>{employees.description}</td>
              <td>
                <EditEmployee employees={employees} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteEmployee(employees.employee_id)}
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
