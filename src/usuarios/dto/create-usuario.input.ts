import { InputType, Field,Int,Float } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsBoolean, IsIn, MinLength } from 'class-validator';
import { BeneficiarioInput } from './beneficiario.input';

 @InputType()
export class CrearUsuarioInput {
  @Field()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsNotEmpty()
  apellidoPaterno: string;

  @Field()
  @IsNotEmpty()
  apellidoMaterno: string;

  @Field()
  @IsIn(['H', 'M'])
  sexo: string;

  @Field()
  @IsNotEmpty()
  fechaNacimiento: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  edad?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  talla?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  peso?: number;

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
  @IsEmail()
  email: string;

  @Field()
  @IsBoolean()
  aceptaTerminos: boolean;

  @Field()
  @MinLength(6)
   password: string;

    @Field(() => [BeneficiarioInput], { nullable: 'itemsAndList' })
  @IsOptional()
  beneficiarios?: BeneficiarioInput[];
}

