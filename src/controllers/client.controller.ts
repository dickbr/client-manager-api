import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { CreateClientRequest } from "./dtos/create-client.request";
import { CreateClient } from "@core/use-case/create-client.use-case";
import { ClientEntity } from "@database/entities/client.entity";
import { ListClientRequest } from "./dtos/list-client.request";
import { ListClient } from "@core/use-case/list-client.use-case";
import { GetClient } from "@core/use-case/get-client.use-case";
import { CalcRoute } from "@core/use-case/calc-route.use-case";

@Controller('clients')
export class ClientController {

  constructor(
    private readonly createClient: CreateClient,
    private readonly listClient: ListClient,
    private readonly getClient: GetClient,
    private readonly calcRoute: CalcRoute,
  ) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() body: CreateClientRequest
  ): Promise<ClientEntity> {
    return await this.createClient.execute(body);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async list(
    @Query() query: ListClientRequest
  ): Promise<ClientEntity[]> {
    return await this.listClient.execute(query);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async get(
    @Param('id') id: string
  ): Promise<ClientEntity> {
    return await this.getClient.execute(id);
  }

  @Get('calc-routes')
  @HttpCode(HttpStatus.OK)
  async calc(): Promise<ClientEntity[]> {
    return await this.calcRoute.execute();
  }
}