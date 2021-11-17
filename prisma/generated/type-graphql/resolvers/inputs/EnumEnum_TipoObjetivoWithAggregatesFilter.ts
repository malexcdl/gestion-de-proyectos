import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_TipoObjetivoFilter } from "../inputs/NestedEnumEnum_TipoObjetivoFilter";
import { NestedEnumEnum_TipoObjetivoWithAggregatesFilter } from "../inputs/NestedEnumEnum_TipoObjetivoWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Enum_TipoObjetivo } from "../../enums/Enum_TipoObjetivo";

@TypeGraphQL.InputType("EnumEnum_TipoObjetivoWithAggregatesFilter", {
  isAbstract: true
})
export class EnumEnum_TipoObjetivoWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Enum_TipoObjetivo, {
    nullable: true
  })
  equals?: "General" | "Especifico" | undefined;

  @TypeGraphQL.Field(_type => [Enum_TipoObjetivo], {
    nullable: true
  })
  in?: Array<"General" | "Especifico"> | undefined;

  @TypeGraphQL.Field(_type => [Enum_TipoObjetivo], {
    nullable: true
  })
  notIn?: Array<"General" | "Especifico"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_TipoObjetivoWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoFilter, {
    nullable: true
  })
  _min?: NestedEnumEnum_TipoObjetivoFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoFilter, {
    nullable: true
  })
  _max?: NestedEnumEnum_TipoObjetivoFilter | undefined;
}
