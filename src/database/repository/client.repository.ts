import { ClientEntity } from "@database/entities/client.entity";
import { DataSource } from "@database/postgres";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientRepository {
  private readonly repository = DataSource.datasource;

  async save(entity: ClientEntity): Promise<ClientEntity> {
    const fields = ['name', 'email', 'cellphone', 'lat', 'log'];
    const values: string[] = [];
    fields.forEach((field) => {
      values.push(`'${entity[field]}'`);
    });

    const { rows } = await this.repository.query<ClientEntity>(`
      INSERT INTO clients (${fields.join(',')}) VALUES (${values.join(',')}) RETURNING *
    `);

    return rows[0];
  }

  async getMany(entity?: Partial<ClientEntity>): Promise<ClientEntity[]> {
    const fields = Object.entries(entity ?? {})
      .filter(([_, value]) => value)
      .map(([key, value]) => `(${key} ILIKE '%${value}%')`)

    const where = fields.length ? `WHERE ${fields.join(' AND ')}` : '';

    const { rows } = await this.repository.query<ClientEntity>(`
      SELECT * FROM clients ${where}
    `)

    return rows;
  }

  async getOne(id: string): Promise<ClientEntity> {
    const { rows } = await this.repository.query<ClientEntity>(`
      SELECT * FROM clients WHERE id = '${id}'
    `)

    return rows[0];
  }
}