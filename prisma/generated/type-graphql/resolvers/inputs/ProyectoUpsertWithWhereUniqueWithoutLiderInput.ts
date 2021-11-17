import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateWithoutLiderInput } from "../inputs/ProyectoCreateWithoutLiderInput";
import { ProyectoUpdateWithoutLiderInput } from "../inputs/ProyectoUpdateWithoutLiderInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoUpsertWithWhereUniqueWithoutLiderInput", {
  isAbstract: true
})
export class ProyectoUpsertWithWhereUniqueWithoutLiderInput {
  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: false
  })
  where!: ProyectoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProyectoUpdateWithoutLiderInput, {
    nullable: false
  })
  update!: ProyectoUpdateWithoutLiderInput;

  @TypeGraphQL.Field(_type => ProyectoCreateWithoutLiderInput, {
    nullable: false
  })
  create!: ProyectoCreateWithoutLiderInput;
}
