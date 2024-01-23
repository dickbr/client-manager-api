import { ClientEntity } from "@database/entities/client.entity";
import { ClientRepository } from "@database/repository/client.repository";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class GetClient {
  constructor(
    private readonly repository: ClientRepository
  ) { }

  async execute(id: string): Promise<ClientEntity> {
    const client = await this.repository.getOne(id);

    if (!client) throw new NotFoundException('Client not found');

    return client;
  }
}