import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { AuthPayload } from "./entity/auth-payload";
import { LoginInput } from "./dto/login.input";
import { UsuarioEntity } from "../usuarios/entity/usuario.entity";


@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload, { name: "login" })
  async login(
    @Args("input") input: LoginInput,
  ): Promise<{ access_token: string; usuario: Omit<UsuarioEntity, "password"> }> {
    const usuario = await this.authService.validateUser(
      input.email,
      input.password,
    );
    return this.authService.login(usuario);
  }
}
