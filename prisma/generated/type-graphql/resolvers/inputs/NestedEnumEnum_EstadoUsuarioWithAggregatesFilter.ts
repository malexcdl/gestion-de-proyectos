import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_EstadoUsuarioFilter } from "../inputs/NestedEnumEnum_EstadoUsuarioFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Enum_EstadoUsuario } from "../../enums/Enum_EstadoUsuario";

@TypeGraphQL.InputType("NestedEnumEnum_EstadoUsuarioWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumEnum_EstadoUsuarioWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_EstadoUsuarioWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioFilter, {
    nullable: true
  })
  _min?: NestedEnumEnum_EstadoUsuarioFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioFilter, {
    nullable: true
  })
  _max?: NestedEnumEnum_EstadoUsuarioFilter | undefined;
}
