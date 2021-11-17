import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateWithoutLiderInput } from "../inputs/ProyectoCreateWithoutLiderInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutLiderInput", {
  isAbstract: true
})
export class ProyectoCreateOrConnectWithoutLiderInput {
  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: false
  })
  where!: ProyectoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProyectoCreateWithoutLiderInput, {
    nullable: false
  })
  create!: ProyectoCreateWithoutLiderInput;
}
