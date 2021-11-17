import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_EstadoInscripcionFilter } from "../inputs/NestedEnumEnum_EstadoInscripcionFilter";
import { Enum_EstadoInscripcion } from "../../enums/Enum_EstadoInscripcion";

@TypeGraphQL.InputType("EnumEnum_EstadoInscripcionFilter", {
  isAbstract: true
})
export class EnumEnum_EstadoInscripcionFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_EstadoInscripcionFilter | undefined;
}
