import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_TipoObjetivo } from "../../enums/Enum_TipoObjetivo";

@TypeGraphQL.InputType("EnumEnum_TipoObjetivoFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumEnum_TipoObjetivoFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Enum_TipoObjetivo, {
    nullable: true
  })
  set?: "General" | "Especifico" | undefined;
}
