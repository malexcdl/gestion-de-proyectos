import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_EstadoProyectoFilter } from "../inputs/NestedEnumEnum_EstadoProyectoFilter";
import { Enum_EstadoProyecto } from "../../enums/Enum_EstadoProyecto";

@TypeGraphQL.InputType("EnumEnum_EstadoProyectoFilter", {
  isAbstract: true
})
export class EnumEnum_EstadoProyectoFilter {
  @TypeGraphQL.Field(_type => Enum_EstadoProyecto, {
    nullable: true
  })
  equals?: "Activo" | "Inactivo" | undefined;

  @TypeGraphQL.Field(_type => [Enum_EstadoProyecto], {
    nullable: true
  })
  in?: Array<"Activo" | "Inactivo"> | undefined;

  @TypeGraphQL.Field(_type => [Enum_EstadoProyecto], {
    nullable: true
  })
  notIn?: Array<"Activo" | "Inactivo"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_EstadoProyectoFilter | undefined;
}
