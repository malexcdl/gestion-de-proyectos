import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_EstadoInscripcionFilter } from "../inputs/NestedEnumEnum_EstadoInscripcionFilter";
import { NestedEnumEnum_EstadoInscripcionWithAggregatesFilter } from "../inputs/NestedEnumEnum_EstadoInscripcionWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Enum_EstadoInscripcion } from "../../enums/Enum_EstadoInscripcion";

@TypeGraphQL.InputType("EnumEnum_EstadoInscripcionWithAggregatesFilter", {
  isAbstract: true
})
export class EnumEnum_EstadoInscripcionWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Enum_EstadoInscripcion, {
    nullable: true
  })
  equals?: "Aceptada" | "Rechazada" | undefined;

  @TypeGraphQL.Field(_type => [Enum_EstadoInscripcion], {
    nullable: true
  })
  in?: Array<"Aceptada" | "Rechazada"> | undefined;

  @TypeGraphQL.Field(_type => [Enum_EstadoInscripcion], {
    nullable: true
  })
  notIn?: Array<"Aceptada" | "Rechazada"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_EstadoInscripcionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionFilter, {
    nullable: true
  })
  _min?: NestedEnumEnum_EstadoInscripcionFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionFilter, {
    nullable: true
  })
  _max?: NestedEnumEnum_EstadoInscripcionFilter | undefined;
}
