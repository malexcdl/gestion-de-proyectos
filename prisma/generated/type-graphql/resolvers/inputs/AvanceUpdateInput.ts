import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProyectoUpdateOneRequiredWithoutAvancesInput } from "../inputs/ProyectoUpdateOneRequiredWithoutAvancesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutAvancesCreadosInput } from "../inputs/UsuarioUpdateOneRequiredWithoutAvancesCreadosInput";

@TypeGraphQL.InputType("AvanceUpdateInput", {
  isAbstract: true
})
export class AvanceUpdateInput {
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

  @TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutAvancesInput, {
    nullable: true
  })
  proyecto?: ProyectoUpdateOneRequiredWithoutAvancesInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutAvancesCreadosInput, {
    nullable: true
  })
  creadoPor?: UsuarioUpdateOneRequiredWithoutAvancesCreadosInput | undefined;
}
