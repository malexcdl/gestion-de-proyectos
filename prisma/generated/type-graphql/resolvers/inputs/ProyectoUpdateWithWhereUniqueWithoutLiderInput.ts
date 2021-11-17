import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoUpdateWithoutLiderInput } from "../inputs/ProyectoUpdateWithoutLiderInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoUpdateWithWhereUniqueWithoutLiderInput", {
  isAbstract: true
})
export class ProyectoUpdateWithWhereUniqueWithoutLiderInput {
  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: false
  })
  where!: ProyectoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProyectoUpdateWithoutLiderInput, {
    nullable: false
  })
  data!: ProyectoUpdateWithoutLiderInput;
}
