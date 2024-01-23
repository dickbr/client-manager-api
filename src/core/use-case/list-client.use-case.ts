import { ClientEntity } from "@database/entities/client.entity";
import { ClientRepository } from "@database/repository/client.repository";
import { Injectable } from "@nestjs/common";
import { ListClientRequest } from "@src/controllers/dtos/list-client.request";

@Injectable()
export class ListClient {
  constructor(
    private readonly repository: ClientRepository
  ) { }

  async execute(input: ListClientRequest): Promise<ClientEntity[]> {
    return await this.repository.getMany(input);
  }
}