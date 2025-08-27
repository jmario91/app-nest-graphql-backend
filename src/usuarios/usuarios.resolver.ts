import { Resolver, Query, Mutation, Args,Int } from '@nestjs/graphql';
import { UsuariosService } from './usuarios.service';
import { UsuarioEntity } from './entity/usuario.entity';
import { CrearUsuarioInput } from './dto/create-usuario.input';
import { UsuariosPaginados } from './dto/usuarios-paginados.response';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { FiltroUsuarioInput } from './dto/filtro-usuario.input';
import { GqlAuthGuard } from "../auth/gql-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { use } from 'passport';
import { UseGuards } from '@nestjs/common';


@Resolver(() => UsuarioEntity)
export class UsuariosResolver {
  constructor(private readonly usersService: UsuariosService) {}

  @Query(() => [UsuarioEntity], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Mutation(() => UsuarioEntity)
  crearUsuario(@Args('input') input: CrearUsuarioInput) {
    return this.usersService.create(input);
  }

  @Query(() => UsuariosPaginados)
  @UseGuards(GqlAuthGuard)
  usuariosPaginado(
    @Args('pagina', { type: () => Int }) pagina: number,
    @Args('limite', { type: () => Int }) limite: number,
    @Args('filtro', { nullable: true }) filtro?: FiltroUsuarioInput,
  @CurrentUser() usuario?: UsuarioEntity,
  ) {
    return this.usersService.usuariosPaginado(pagina, limite, filtro);
  }

  // Obtener por ID
  @Query(() => UsuarioEntity)
  @UseGuards(GqlAuthGuard)
  usuario(@Args('id') id: string,
@CurrentUser() usuario?: UsuarioEntity
) {
    return this.usersService.usuarioPorId(id);
  }

  // Actualizar
  @Mutation(() => UsuarioEntity)
  @UseGuards(GqlAuthGuard)
  actualizarUsuario(
    @Args('id') id: string, 
    @Args('input') input: UpdateUsuarioInput,
@CurrentUser() usuario?: UsuarioEntity
) {
    return this.usersService.actualizarUsuario(id, input);
  }

  // Eliminar
  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  eliminarUsuario(@Args('id') id: string,
@CurrentUser() usuario?: UsuarioEntity
) {
    return this.usersService.eliminarUsuario(id);
  }
}
