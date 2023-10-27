//forma de hacer las rutas del servidor

import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from "../Controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployees);

router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

export default router;
