import { ObjectType, Field } from "@nestjs/graphql";
import { UsuarioEntity } from "../../usuarios/entity/usuario.entity";

@ObjectType()
export class AuthPayload {
  @Field()
  access_token: string;

  @Field(() => UsuarioEntity)
  usuario: UsuarioEntity;
}
