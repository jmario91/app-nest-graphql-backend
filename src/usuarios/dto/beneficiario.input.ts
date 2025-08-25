import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsNotEmpty } from 'class-validator';

@InputType()
export class BeneficiarioInput {
  @Field({ nullable: true })
  @IsOptional()
  id?: string;

  @Field({ nullable: true })
  @IsOptional()
  idDetalle?: string;

  @Field()
  @IsNotEmpty()
  nombre: string;
}
