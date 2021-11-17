import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_FaseProyecto } from "../../enums/Enum_FaseProyecto";

@TypeGraphQL.InputType("EnumEnum_FaseProyectoFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumEnum_FaseProyectoFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Enum_FaseProyecto, {
    nullable: true
  })
  set?: "Iniciado" | "Desarrollo" | "Terminado" | undefined;
}
