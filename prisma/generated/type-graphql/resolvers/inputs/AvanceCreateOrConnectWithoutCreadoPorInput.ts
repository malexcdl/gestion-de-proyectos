import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateWithoutCreadoPorInput } from "../inputs/AvanceCreateWithoutCreadoPorInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceCreateOrConnectWithoutCreadoPorInput", {
  isAbstract: true
})
export class AvanceCreateOrConnectWithoutCreadoPorInput {
  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: false
  })
  where!: AvanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvanceCreateWithoutCreadoPorInput, {
    nullable: false
  })
  create!: AvanceCreateWithoutCreadoPorInput;
}
