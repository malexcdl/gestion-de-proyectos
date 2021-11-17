import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_EstadoProyecto } from "../../enums/Enum_EstadoProyecto";

@TypeGraphQL.InputType("EnumEnum_EstadoProyectoFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumEnum_EstadoProyectoFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Enum_EstadoProyecto, {
    nullable: true
  })
  set?: "Activo" | "Inactivo" | undefined;
}
