import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'; //池化、连接池，适用于复杂任务处理
import * as schema from './model'
const pool = new Pool({
  host: '127.0.0.1',
  port:5432,
  user: 'postgres',
  password: '123456',
  database: 'morganatest',
});
export const db = drizzle(pool,{schema}); //创建drizzle实例