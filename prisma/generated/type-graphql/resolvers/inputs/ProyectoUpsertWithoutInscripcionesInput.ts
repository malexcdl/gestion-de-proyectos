import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateWithoutInscripcionesInput } from "../inputs/ProyectoCreateWithoutInscripcionesInput";
import { ProyectoUpdateWithoutInscripcionesInput } from "../inputs/ProyectoUpdateWithoutInscripcionesInput";

@TypeGraphQL.InputType("ProyectoUpsertWithoutInscripcionesInput", {
  isAbstract: true
})
export class ProyectoUpsertWithoutInscripcionesInput {
  @TypeGraphQL.Field(_type => ProyectoUpdateWithoutInscripcionesInput, {
    nullable: false
  })
  update!: ProyectoUpdateWithoutInscripcionesInput;

  @TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionesInput, {
    nullable: false
  })
  create!: ProyectoCreateWithoutInscripcionesInput;
}
