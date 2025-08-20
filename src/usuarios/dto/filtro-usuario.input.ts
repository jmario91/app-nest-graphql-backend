import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class FiltroUsuarioInput {
  @Field({ nullable: true })
  @IsOptional()
  nombre?: string;

  @Field({ nullable: true })
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  estatus?: string;

  @Field({ nullable: true })
  @IsOptional()
  municipio?: string;

  @Field({ nullable: true })
  @IsOptional()
  entidad?: string;
}
