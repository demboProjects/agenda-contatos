import { Pool } from "pg";
import { config } from "dotenv";

config();

const connectionString = `${process.env.URI_DB_CONECTION}`

const dbConnection = new Pool({ connectionString });




export { dbConnection }