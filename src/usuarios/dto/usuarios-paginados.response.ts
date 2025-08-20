import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UsuarioEntity } from '../entity/usuario.entity';

@ObjectType()
export class UsuariosPaginados {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  paginas: number;

  @Field(() => Int)
  paginaActual: number;

  @Field(() => [UsuarioEntity])
  usuarios: UsuarioEntity[];
}
