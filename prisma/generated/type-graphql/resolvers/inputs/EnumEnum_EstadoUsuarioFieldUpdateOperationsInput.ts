import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_EstadoUsuario } from "../../enums/Enum_EstadoUsuario";

@TypeGraphQL.InputType("EnumEnum_EstadoUsuarioFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumEnum_EstadoUsuarioFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Enum_EstadoUsuario, {
    nullable: true
  })
  set?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
}
