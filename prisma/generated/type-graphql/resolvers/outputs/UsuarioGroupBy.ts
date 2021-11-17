import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCountAggregate } from "../outputs/UsuarioCountAggregate";
import { UsuarioMaxAggregate } from "../outputs/UsuarioMaxAggregate";
import { UsuarioMinAggregate } from "../outputs/UsuarioMinAggregate";
import { Enum_EstadoUsuario } from "../../enums/Enum_EstadoUsuario";
import { Enum_Rol } from "../../enums/Enum_Rol";

@TypeGraphQL.ObjectType("UsuarioGroupBy", {
  isAbstract: true
})
export class UsuarioGroupBy {
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
  telefono!: string | null;

  @TypeGraphQL.Field(_type => Enum_Rol, {
    nullable: false
  })
  rol!: "Estudiante" | "Lider" | "Administrador";

  @TypeGraphQL.Field(_type => Enum_EstadoUsuario, {
    nullable: false
  })
  estado!: "Pendiente" | "Autorizado" | "NoAutorizado";

  @TypeGraphQL.Field(_type => UsuarioCountAggregate, {
    nullable: true
  })
  _count!: UsuarioCountAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioMinAggregate, {
    nullable: true
  })
  _min!: UsuarioMinAggregate | null;

  @TypeGraphQL.Field(_type => UsuarioMaxAggregate, {
    nullable: true
  })
  _max!: UsuarioMaxAggregate | null;
}
