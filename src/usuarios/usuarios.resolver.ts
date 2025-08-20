import { Resolver, Query, Mutation, Args,Int } from '@nestjs/graphql';
import { UsuariosService } from './usuarios.service';
import { UsuarioEntity } from './entity/usuario.entity';
import { CrearUsuarioInput } from './dto/create-usuario.input';
import { UsuariosPaginados } from './dto/usuarios-paginados.response';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { FiltroUsuarioInput } from './dto/filtro-usuario.input';

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
  usuariosPaginado(
    @Args('pagina', { type: () => Int }) pagina: number,
    @Args('limite', { type: () => Int }) limite: number,
    @Args('filtro', { nullable: true }) filtro?: FiltroUsuarioInput,
  ) {
    return this.usersService.usuariosPaginado(pagina, limite, filtro);
  }

  // Obtener por ID
  @Query(() => UsuarioEntity)
  usuario(@Args('id') id: string) {
    return this.usersService.usuarioPorId(id);
  }

  // Actualizar
  @Mutation(() => UsuarioEntity)
  actualizarUsuario(@Args('id') id: string, @Args('input') input: UpdateUsuarioInput) {
    return this.usersService.actualizarUsuario(id, input);
  }

  // Eliminar
  @Mutation(() => Boolean)
  eliminarUsuario(@Args('id') id: string) {
    return this.usersService.eliminarUsuario(id);
  }
}
