import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel  } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './schema/usuario.schema';
import { CrearUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { FiltroUsuarioInput } from './dto/filtro-usuario.input';
import { hash } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario.name) private userModel: Model<UsuarioDocument>) {}

  async create(input: CrearUsuarioInput): Promise<Usuario> {
    const salt =await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(input.password, salt);
    // const createdUser = new this.userModel(input);
    // return createdUser.save();
     input.beneficiarios = (input.beneficiarios ?? []).map((b) => ({
      ...b,
      id: b.id ?? new Date().getTime().toString(),
      idDetalle: b.idDetalle ?? 'DET-' + new Date().getTime(),
    }));

    const createdUser = new this.userModel({
      ...input,
      password: hashPassword,  
    
    });
    return createdUser.save();
  }

async findByEmail(email: string) {
  return this.userModel.findOne({ email }).exec();
}
  async findAll(): Promise<Usuario[]> {
    return this.userModel.find().exec();
  }

  
   async usuariosPaginado(pagina: number, limite: number, filtro?: FiltroUsuarioInput) {
  const query: any = {};

  if (filtro) {
    const or: any[] = [];

    if (filtro.nombre) {
      or.push({ nombre: new RegExp(filtro.nombre, 'i') });
    }

    if (filtro.email) {
      or.push({ email: new RegExp(filtro.email, 'i') });
    }

    if (or.length > 0) {
      query.$or = or;
    }

    if (filtro.estatus) query.estatus = filtro.estatus;
    if (filtro.municipio) query.municipio = new RegExp(filtro.municipio, 'i');
    if (filtro.entidad) query.entidad = new RegExp(filtro.entidad, 'i');
  }

  const total = await this.userModel.countDocuments(query);
  const usuarios = await this.userModel
    .find(query)
    .select('-password') // Excluir el campo password
    .skip((pagina - 1) * limite)
    .limit(limite)
    .exec();

  return {
    total,
    paginas: Math.ceil(total / limite),
    paginaActual: pagina,
    usuarios,
  };
}
  async usuarioPorId(id: string): Promise<Usuario> {
    const usuario = await this.userModel.findById(id).select("-password").exec();
    if (!usuario) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    return usuario;
  }

  async actualizarUsuario(id: string, input: UpdateUsuarioInput): Promise<Usuario> {
  input.beneficiarios = (input.beneficiarios ?? []).map((b) => ({
      ...b,
      id: b.id ?? new Date().getTime().toString(),
      idDetalle: b.idDetalle ?? 'DET-' + new Date().getTime(),
    }));
  
if (input.password) {
const salt =await bcrypt.genSalt(10);
input.password = await bcrypt.hash(input.password, salt);
}

    const usuario = await this.userModel.findByIdAndUpdate(id, input, { new: true })
    .select("-password")
    .exec();
    if (!usuario) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    return usuario;
  }

  async eliminarUsuario(id: string): Promise<boolean> {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
