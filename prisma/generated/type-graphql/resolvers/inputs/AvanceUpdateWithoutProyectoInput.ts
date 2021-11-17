import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutAvancesCreadosInput } from "../inputs/UsuarioUpdateOneRequiredWithoutAvancesCreadosInput";

@TypeGraphQL.InputType("AvanceUpdateWithoutProyectoInput", {
  isAbstract: true
})
export class AvanceUpdateWithoutProyectoInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  fecha?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  descripcion?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  observaciones?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutAvancesCreadosInput, {
    nullable: true
  })
  creadoPor?: UsuarioUpdateOneRequiredWithoutAvancesCreadosInput | undefined;
}
