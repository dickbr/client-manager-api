import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import 'dotenv/config'
import { ClientController } from './controllers/client.controller';
import { CreateClient } from '@core/use-case/create-client.use-case';
import { ClientEntity } from '@database/entities/client.entity';
import { ClientRepository } from '@database/repository/client.repository';
import { ListClient } from '@core/use-case/list-client.use-case';
import { GetClient } from '@core/use-case/get-client.use-case';
import { CalcRoute } from '@core/use-case/calc-route.use-case';

@Module({
  providers: [CreateClient, ClientEntity, ClientRepository, ListClient, GetClient, CalcRoute],
  controllers: [ClientController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply().forRoutes();
  }
}
