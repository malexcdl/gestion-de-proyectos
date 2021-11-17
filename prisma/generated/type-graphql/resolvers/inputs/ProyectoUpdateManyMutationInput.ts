import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_EstadoProyectoFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoProyectoFieldUpdateOperationsInput";
import { EnumEnum_FaseProyectoFieldUpdateOperationsInput } from "../inputs/EnumEnum_FaseProyectoFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProyectoUpdateManyMutationInput", {
  isAbstract: true
})
export class ProyectoUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  nombre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  presupuesto?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  fechaInicio?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  fechaFin?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoFieldUpdateOperationsInput, {
    nullable: true
  })
  estado?: EnumEnum_EstadoProyectoFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_FaseProyectoFieldUpdateOperationsInput, {
    nullable: true
  })
  fase?: EnumEnum_FaseProyectoFieldUpdateOperationsInput | undefined;
}
