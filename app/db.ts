// c:\Users\shubham\Documents\e-way-bill\eway-landing\app\db.ts
import { Pool } from 'pg';

const pg = new Pool({
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '5432')
});

export default pg;
