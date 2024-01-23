import { ClientEntity } from "@database/entities/client.entity";
import { ClientRepository } from "@database/repository/client.repository";
import { Injectable } from "@nestjs/common";
import { CreateClientRequest } from "@src/controllers/dtos/create-client.request";

@Injectable()
export class CreateClient {
  constructor(
    private readonly repository: ClientRepository
  ) { }

  async execute(input: CreateClientRequest): Promise<ClientEntity> {
    return await this.repository.save(input);
  }
}