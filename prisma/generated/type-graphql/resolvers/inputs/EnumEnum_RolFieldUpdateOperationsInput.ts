import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_Rol } from "../../enums/Enum_Rol";

@TypeGraphQL.InputType("EnumEnum_RolFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumEnum_RolFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Enum_Rol, {
    nullable: true
  })
  set?: "Estudiante" | "Lider" | "Administrador" | undefined;
}
