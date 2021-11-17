import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateWithoutObjetivosInput } from "../inputs/ProyectoCreateWithoutObjetivosInput";
import { ProyectoUpdateWithoutObjetivosInput } from "../inputs/ProyectoUpdateWithoutObjetivosInput";

@TypeGraphQL.InputType("ProyectoUpsertWithoutObjetivosInput", {
  isAbstract: true
})
export class ProyectoUpsertWithoutObjetivosInput {
  @TypeGraphQL.Field(_type => ProyectoUpdateWithoutObjetivosInput, {
    nullable: false
  })
  update!: ProyectoUpdateWithoutObjetivosInput;

  @TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosInput, {
    nullable: false
  })
  create!: ProyectoCreateWithoutObjetivosInput;
}
