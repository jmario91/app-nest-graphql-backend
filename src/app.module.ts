 import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { UploadScalar } from './common/scalars/upload.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // genera esquema automáticamente
      playground: true,             // Apollo Sandbox
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/miapp'),
    UsuariosModule,
    AuthModule
  ],
  providers: [UploadScalar],
})
export class AppModule {}
