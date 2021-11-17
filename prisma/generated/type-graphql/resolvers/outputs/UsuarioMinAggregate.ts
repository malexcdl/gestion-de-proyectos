import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_EstadoUsuario } from "../../enums/Enum_EstadoUsuario";
import { Enum_Rol } from "../../enums/Enum_Rol";

@TypeGraphQL.ObjectType("UsuarioMinAggregate", {
  isAbstract: true
})
export class UsuarioMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  correo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nombre!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  apellido!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identificacion!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telefono!: string | null;

  @TypeGraphQL.Field(_type => Enum_Rol, {
    nullable: true
  })
  rol!: "Estudiante" | "Lider" | "Administrador" | null;

  @TypeGraphQL.Field(_type => Enum_EstadoUsuario, {
    nullable: true
  })
  estado!: "Pendiente" | "Autorizado" | "NoAutorizado" | null;
}
