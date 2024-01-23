import { ClientEntity } from "@database/entities/client.entity";
import { ClientRepository } from "@database/repository/client.repository";
import { Injectable } from "@nestjs/common";
import { orderByDistance } from "geolib";

@Injectable()
export class CalcRoute {
  constructor(
    private readonly repository: ClientRepository
  ) { }

  async execute(): Promise<ClientEntity[]> {
    const clients = await this.repository.getMany();

    return this.calculateOptimalRoute(clients);
  }

  calculateOptimalRoute(clients: ClientEntity[]): ClientEntity[] {
    const points = clients.reduce<Array<{ latitude: number; longitude: number }>>((prev, { lat, log }) => {
      prev.push({
        latitude: Number(lat),
        longitude: Number(log),
      })
      return prev;
    }, [])

    const result = orderByDistance({ latitude: 0, longitude: 0 }, points) as Array<{ latitude: number; longitude: number }>;

    return result.map((point) => {
      return clients.find(({ lat, log }) => Number(lat) === point.latitude && Number(log) === point.longitude)
    }).filter((client) => client?.id) as ClientEntity[]
  }
}