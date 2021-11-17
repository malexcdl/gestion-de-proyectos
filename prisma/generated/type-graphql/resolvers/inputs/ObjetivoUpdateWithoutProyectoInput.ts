import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEnum_TipoObjetivoFieldUpdateOperationsInput } from "../inputs/EnumEnum_TipoObjetivoFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ObjetivoUpdateWithoutProyectoInput", {
  isAbstract: true
})
export class ObjetivoUpdateWithoutProyectoInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  descripcion?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_TipoObjetivoFieldUpdateOperationsInput, {
    nullable: true
  })
  tipo?: EnumEnum_TipoObjetivoFieldUpdateOperationsInput | undefined;
}
