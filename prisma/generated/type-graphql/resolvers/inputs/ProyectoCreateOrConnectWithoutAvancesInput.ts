import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateWithoutAvancesInput } from "../inputs/ProyectoCreateWithoutAvancesInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutAvancesInput", {
  isAbstract: true
})
export class ProyectoCreateOrConnectWithoutAvancesInput {
  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: false
  })
  where!: ProyectoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProyectoCreateWithoutAvancesInput, {
    nullable: false
  })
  create!: ProyectoCreateWithoutAvancesInput;
}
