import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_EstadoUsuario } from "../../enums/Enum_EstadoUsuario";

@TypeGraphQL.InputType("NestedEnumEnum_EstadoUsuarioFilter", {
  isAbstract: true
})
export class NestedEnumEnum_EstadoUsuarioFilter {
  @TypeGraphQL.Field(_type => Enum_EstadoUsuario, {
    nullable: true
  })
  equals?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;

  @TypeGraphQL.Field(_type => [Enum_EstadoUsuario], {
    nullable: true
  })
  in?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;

  @TypeGraphQL.Field(_type => [Enum_EstadoUsuario], {
    nullable: true
  })
  notIn?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_EstadoUsuarioFilter | undefined;
}
