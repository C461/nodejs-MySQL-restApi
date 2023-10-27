import { createPool } from 'mysql2/promise'
import {USER, DBPORT, DATABASE, HOST, PASSWORD } from './config.js'

export const pool = createPool({
    host: HOST, 
    user: USER,
    password: PASSWORD,
    port: DBPORT,
    database: DATABASE
})

//es importante instalar el modulo dotenv