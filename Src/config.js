import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.DB_HOST || "localhost";
export const DBPORT = process.env.DB_PORT || 3306;
export const USER = process.env.DB_USER || "user";
export const PASSWORD = process.env.DB_PASSWORD || "Efrain319.";
export const DATABASE = process.env.DB_DATABASE || "companydb";
