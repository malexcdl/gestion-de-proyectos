import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_TipoObjetivo } from "../../enums/Enum_TipoObjetivo";

@TypeGraphQL.InputType("NestedEnumEnum_TipoObjetivoFilter", {
  isAbstract: true
})
export class NestedEnumEnum_TipoObjetivoFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEnum_TipoObjetivoFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_TipoObjetivoFilter | undefined;
}
