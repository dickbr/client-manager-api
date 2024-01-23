import { Pool, PoolClient, QueryResult } from 'pg';
import 'dotenv/config'
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataSource {
  static query: QueryResult<any>;
  static datasource: PoolClient;

  async datasourceConnection(): Promise<void> {
    const pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASS,
      port: Number(process.env.DB_PORT),
    });

    const schema = process.env.DB_SCHEMA;
    const client = await pool.connect();

    try {
      await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
      DataSource.query = await client.query(`SET SCHEMA '${schema}'`);
      DataSource.datasource = client;
      console.log('Database connected')
    } catch (err) {
      console.log({ err })
      client.release();
      throw err;
    }
  }

}
