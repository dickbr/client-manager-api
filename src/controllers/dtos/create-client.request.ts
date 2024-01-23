import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateClientRequest {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  cellphone!: string;

  @IsEmail()
  email!: string;

  @IsNumber()
  @IsNotEmpty()
  lat!: number;

  @IsNumber()
  @IsNotEmpty()
  log!: number;
}