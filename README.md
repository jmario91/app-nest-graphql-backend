## Backend GraphQL con NestJS + Apollo + MongoDB con las ultimas versiones estables de cada una.
##  Descripción

Este proyecto es un Backend moderno construido con:

*NestJS v10 – Framework modular y escalable para Node.js.

*GraphQL v13.1.0 – API flexible y tipada.

*Apollo Server v5 – Motor GraphQL más usado y robusto.

*MongoDB + Mongoose – Base de datos NoSQL para persistencia.

*Class-Validator & Class-Transformer – Validaciones automáticas de DTOs.

La aplicación está diseñada con mejores prácticas: arquitectura modular, validaciones globales, escalabilidad y mantenibilidad.

##  Estructura del proyecto
src/
 ├── common/             # Pipes, filtros, decoradores globales
 ├── database/           # Configuración MongoDB
 ├── usuarios/              # Módulo de ejemplo (Users)
 │    ├── dto/           # DTOs y validaciones
 │    ├── entity/      # Entidades GraphQL
 │    ├── schema/       # Esquemas Mongoose
 │    ├── usuarios.module.ts
 │    ├── usuarios.service.ts
 │    └── usuarios.resolver.ts
 ├── app.module.ts
 └── main.ts

##  Instalación

1. Clonar el repo
git clone https://github.com/jmario91/app-nest-graphql-backend.git
cd app-nest-graphql-backend

2. Instalar dependencias
npm install

 
3.
Conéctalo con MongoDB Compass en:

mongodb://127.0.0.1:27017/miapp

4. Levantar servidor NestJS
npm run start:dev


Servidor corriendo en 👉 http://localhost:3000/graphql



##  Scripts disponibles
Script	Descripción
npm run start	Inicia en modo producción
npm run start:dev	Inicia en modo desarrollo (hot-reload)
npm run build	Compila el proyecto
npm run lint	Corre linter para revisar estilo/código
npm run test	Ejecuta pruebas unitarias (Jest)

##  Buenas prácticas aplicadas

Arquitectura modular por dominio.

Separación clara: DTOs, Entities, Schemas.



 