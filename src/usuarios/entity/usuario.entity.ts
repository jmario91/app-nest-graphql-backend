import { ObjectType, Field, ID } from '@nestjs/graphql';


@ObjectType()
export class BeneficiarioEntity {
  @Field(() => ID)
  id: string;

  @Field()
  idDetalle: string;

  @Field()
  nombre: string;
}

@ObjectType()
export class UsuarioEntity {
  @Field(() => ID)
  id: string;

  @Field() nombre: string;
  @Field() apellidoPaterno: string;
  @Field() apellidoMaterno: string;

  @Field() sexo: string;
  @Field() fechaNacimiento: string;

  @Field({ nullable: true }) edad?: string;
  @Field({ nullable: true }) talla?: string;
  @Field({ nullable: true }) peso?: string;

  @Field() email: string;


  @Field({ nullable: true }) aceptaTerminos: boolean;

  @Field({ nullable: true }) ocupacion?: string;
  @Field({ nullable: true }) estadoCivil?: string;
  @Field({ nullable: true }) nivelEducativo?: string;
  @Field({ nullable: true }) idioma?: string;

  @Field(() => [String], { nullable: 'itemsAndList' }) hobbies?: string[];

  @Field({ nullable: true }) notasAdicionales?: string;
  @Field({ nullable: true }) estatus?: string;

  @Field({ nullable: true }) entidad?: string;
  @Field({ nullable: true }) municipio?: string;
  @Field({ nullable: true }) colonia?: string;
  @Field({ nullable: true }) codigoPostal?: string;

  password?: string;
  @Field({ nullable: true })
  role?: string;

   @Field(() => [BeneficiarioEntity], { nullable: 'itemsAndList' })
  beneficiarios?: BeneficiarioEntity[];
}