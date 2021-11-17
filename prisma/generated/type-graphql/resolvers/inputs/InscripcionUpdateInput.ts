import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_EstadoInscripcionFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoInscripcionFieldUpdateOperationsInput";
import { ProyectoUpdateOneRequiredWithoutInscripcionesInput } from "../inputs/ProyectoUpdateOneRequiredWithoutInscripcionesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutInscripcionesInput } from "../inputs/UsuarioUpdateOneRequiredWithoutInscripcionesInput";

@TypeGraphQL.InputType("InscripcionUpdateInput", {
  isAbstract: true
})
export class InscripcionUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoInscripcionFieldUpdateOperationsInput, {
    nullable: true
  })
  estado?: EnumEnum_EstadoInscripcionFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  fechaIngreso?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  fecjaEgreso?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutInscripcionesInput, {
    nullable: true
  })
  proyecto?: ProyectoUpdateOneRequiredWithoutInscripcionesInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutInscripcionesInput, {
    nullable: true
  })
  estudiante?: UsuarioUpdateOneRequiredWithoutInscripcionesInput | undefined;
}
