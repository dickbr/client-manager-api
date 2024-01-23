import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ListClientRequest {
  @IsString()
  @IsOptional()
  name!: string;

  @IsString()
  @IsOptional()
  cellphone?: string;

  @IsString()
  @IsOptional()
  email?: string;
}