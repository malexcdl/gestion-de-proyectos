import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceUpdateManyWithoutCreadoPorInput } from "../inputs/AvanceUpdateManyWithoutCreadoPorInput";
import { EnumEnum_EstadoUsuarioFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoUsuarioFieldUpdateOperationsInput";
import { EnumEnum_RolFieldUpdateOperationsInput } from "../inputs/EnumEnum_RolFieldUpdateOperationsInput";
import { InscripcionUpdateManyWithoutEstudianteInput } from "../inputs/InscripcionUpdateManyWithoutEstudianteInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UsuarioUpdateWithoutProyectosLideradosInput", {
  isAbstract: true
})
export class UsuarioUpdateWithoutProyectosLideradosInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  correo?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  apellido?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identificacion?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  telefono?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput, {
    nullable: true
  })
  rol?: EnumEnum_RolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioFieldUpdateOperationsInput, {
    nullable: true
  })
  estado?: EnumEnum_EstadoUsuarioFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AvanceUpdateManyWithoutCreadoPorInput, {
    nullable: true
  })
  avancesCreados?: AvanceUpdateManyWithoutCreadoPorInput | undefined;

  @TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutEstudianteInput, {
    nullable: true
  })
  inscripciones?: InscripcionUpdateManyWithoutEstudianteInput | undefined;
}
