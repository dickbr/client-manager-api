import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientEntity {
  id?: string;
  name!: string;
  cellphone!: string;
  email!: string;
  lat!: number;
  log!: number;
  created_at?: Date;
  updated_at?: Date;
}