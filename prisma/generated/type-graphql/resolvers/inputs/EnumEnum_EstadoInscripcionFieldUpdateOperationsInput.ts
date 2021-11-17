import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_EstadoInscripcion } from "../../enums/Enum_EstadoInscripcion";

@TypeGraphQL.InputType("EnumEnum_EstadoInscripcionFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumEnum_EstadoInscripcionFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Enum_EstadoInscripcion, {
    nullable: true
  })
  set?: "Aceptada" | "Rechazada" | undefined;
}
