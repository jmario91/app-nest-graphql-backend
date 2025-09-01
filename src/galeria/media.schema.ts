import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Media extends Document {
  @Prop({ required: true })
  tipo: string; // "imagen" | "video" | "pdf" | "word" | "excel"

  @Prop({ required: true })
  src: string; // URL de la imagen/video/pdf

  @Prop({ required: true })
  alt: string; // Descripción

  @Prop({ default: "General" })
  categoria: string;

  @Prop({ default: "General" })
  subcategoria: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
