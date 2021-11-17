import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateWithoutAvancesInput } from "../inputs/ProyectoCreateWithoutAvancesInput";
import { ProyectoUpdateWithoutAvancesInput } from "../inputs/ProyectoUpdateWithoutAvancesInput";

@TypeGraphQL.InputType("ProyectoUpsertWithoutAvancesInput", {
  isAbstract: true
})
export class ProyectoUpsertWithoutAvancesInput {
  @TypeGraphQL.Field(_type => ProyectoUpdateWithoutAvancesInput, {
    nullable: false
  })
  update!: ProyectoUpdateWithoutAvancesInput;

  @TypeGraphQL.Field(_type => ProyectoCreateWithoutAvancesInput, {
    nullable: false
  })
  create!: ProyectoCreateWithoutAvancesInput;
}
