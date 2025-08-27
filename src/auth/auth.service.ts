import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsuariosService } from "../usuarios/usuarios.service";
import { UsuarioEntity } from "../usuarios/entity/usuario.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<UsuarioEntity, "password">> {
   const usuarioDoc = await this.usuariosService.findByEmail(email);
    if (!usuarioDoc) throw new UnauthorizedException("Credenciales inválidas");

    const valid = await bcrypt.compare(password, usuarioDoc.password);
    if (!valid) throw new UnauthorizedException("Credenciales inválidas");

 
    const usuarioObj = usuarioDoc.toObject ? usuarioDoc.toObject() : usuarioDoc;

  
    const { password: _, _id, ...rest } = usuarioObj;

    return {
      id: _id.toString(),
      ...rest,
    } as UsuarioEntity;
  }

   async login(usuario: UsuarioEntity) {
    const payload = {
      sub: usuario.id,
      email: usuario.email,
      role: usuario.role || "USER",
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuario, // ya sin password
    };
  }
}
