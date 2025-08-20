import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

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
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
