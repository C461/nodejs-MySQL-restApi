//controlador de funciones
import { pool } from "../db.js";

//codigo para obtener los elementos creados, una forma de manejar los errores es a través de try catch
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//codigo para obtener un solo elemento del json
export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//codigo para insertar elementos en el json
export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO employee(name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    }); //siempre para insertar datos se realizan consultas asincronas es por esto que se coloca el await
  }
};

//para poder actualizar se usa el req.body y el req.params.id. Para actualizar todo usamos el metodo put de lo contrario para datos especificos usamos patch
export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [id]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//codigo para eliminar de una base de datos
export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
