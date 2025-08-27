import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsBoolean, IsIn, IsString,IsNotEmpty } from 'class-validator';
import { BeneficiarioInput } from './beneficiario.input';

@InputType()
export class UpdateUsuarioInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  nombre?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  apellidoPaterno?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  apellidoMaterno?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsIn(['H', 'M'])
  sexo?: string;

  @Field({ nullable: true })
  @IsOptional()
  fechaNacimiento?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  edad?: number | null;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  talla?: number | null;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  peso?: number | null;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  aceptaTerminos?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  ocupacion?: string;

  @Field({ nullable: true })
  @IsOptional()
  estadoCivil?: string;

  @Field({ nullable: true })
  @IsOptional()
  nivelEducativo?: string;

  @Field({ nullable: true })
  @IsOptional()
  idioma?: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  @IsOptional()
  hobbies?: string[];

  @Field({ nullable: true })
  @IsOptional()
  notasAdicionales?: string;

  @Field({ nullable: true })
  @IsOptional()
  estatus?: string;

  @Field({ nullable: true })
  @IsOptional()
  entidad?: string;

  @Field({ nullable: true })
  @IsOptional()
  municipio?: string;

  @Field({ nullable: true })
  @IsOptional()
  colonia?: string;

  @Field({ nullable: true })
  @IsOptional()
  codigoPostal?: string;

  @Field()
  @IsOptional()   
  password: string;

    @Field(() => [BeneficiarioInput], { nullable: 'itemsAndList' })
  @IsOptional()
  beneficiarios?: BeneficiarioInput[];
}
