import express from "express";
import employeesRoutes from "./Routes/employees.routes.js";
import indexRoutes from "./Routes/index.routes.js";


const app = express();

app.use(express.json());
app.use("/api", employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
});

export default app