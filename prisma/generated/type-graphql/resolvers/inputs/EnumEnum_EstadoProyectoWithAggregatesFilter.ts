import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_EstadoProyectoFilter } from "../inputs/NestedEnumEnum_EstadoProyectoFilter";
import { NestedEnumEnum_EstadoProyectoWithAggregatesFilter } from "../inputs/NestedEnumEnum_EstadoProyectoWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Enum_EstadoProyecto } from "../../enums/Enum_EstadoProyecto";

@TypeGraphQL.InputType("EnumEnum_EstadoProyectoWithAggregatesFilter", {
  isAbstract: true
})
export class EnumEnum_EstadoProyectoWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_EstadoProyectoWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoFilter, {
    nullable: true
  })
  _min?: NestedEnumEnum_EstadoProyectoFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoFilter, {
    nullable: true
  })
  _max?: NestedEnumEnum_EstadoProyectoFilter | undefined;
}
