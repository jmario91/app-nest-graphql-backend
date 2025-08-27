import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';

export type UsuarioDocument = Usuario & Document & { _id: Types.ObjectId };;

@Schema({ _id: false })
export class Beneficiario {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  idDetalle: string;

  @Prop({ required: true })
  nombre: string;
}

const BeneficiarioSchema = SchemaFactory.createForClass(Beneficiario);

@Schema({ timestamps: true })
export class Usuario {
  @Prop({ required: true }) nombre: string;
  @Prop({ required: true }) apellidoPaterno: string;
  @Prop({ required: true }) apellidoMaterno: string;

  @Prop({ enum: ['H', 'M'], required: true }) sexo: string;

  @Prop({ required: true }) fechaNacimiento: string;
  @Prop() edad: string;
  @Prop() talla: string;
  @Prop() peso: string;

  @Prop({ unique: true, required: true }) email: string;

  @Prop({ default: false }) aceptaTerminos: boolean;

  @Prop() ocupacion: string;
  @Prop() estadoCivil: string;
  @Prop() nivelEducativo: string;
  @Prop() idioma: string;

  @Prop([String]) hobbies: string[];

  @Prop() notasAdicionales: string;
  @Prop() estatus: string;

  @Prop() entidad: string;
  @Prop() municipio: string;
  @Prop() colonia: string;
  @Prop() codigoPostal: string;

  @Prop({ required: true }) password: string;
  @Prop({ default: 'USER' }) role: string;

  @Prop({ type: [BeneficiarioSchema], default: [] })
  beneficiarios: Beneficiario[];
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
