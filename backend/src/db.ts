import {Pool} from "pg"; //pg is the lib we use to interact with postgresDB

 
//pool is a class of tools that pg provides to connect to the DB
export const pool = new Pool({
  connectionString:process.env.DATABASE_URL
})

