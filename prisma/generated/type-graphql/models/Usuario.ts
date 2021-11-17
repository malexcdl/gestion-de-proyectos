import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Avance } from "../models/Avance";
import { Inscripcion } from "../models/Inscripcion";
import { Proyecto } from "../models/Proyecto";
import { Enum_EstadoUsuario } from "../enums/Enum_EstadoUsuario";
import { Enum_Rol } from "../enums/Enum_Rol";
import { UsuarioCount } from "../resolvers/outputs/UsuarioCount";

@TypeGraphQL.ObjectType("Usuario", {
  isAbstract: true
})
export class Usuario {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  correo!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  apellido!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identificacion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telefono?: string | null;

  @TypeGraphQL.Field(_type => Enum_Rol, {
    nullable: false
  })
  rol!: "Estudiante" | "Lider" | "Administrador";

  @TypeGraphQL.Field(_type => Enum_EstadoUsuario, {
    nullable: false
  })
  estado!: "Pendiente" | "Autorizado" | "NoAutorizado";

  proyectosLiderados?: Proyecto[];

  avancesCreados?: Avance[];

  inscripciones?: Inscripcion[];

  @TypeGraphQL.Field(_type => UsuarioCount, {
    nullable: true
  })
  _count?: UsuarioCount | null;
}
