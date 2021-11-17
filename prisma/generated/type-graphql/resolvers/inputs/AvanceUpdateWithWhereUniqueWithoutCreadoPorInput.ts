import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceUpdateWithoutCreadoPorInput } from "../inputs/AvanceUpdateWithoutCreadoPorInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceUpdateWithWhereUniqueWithoutCreadoPorInput", {
  isAbstract: true
})
export class AvanceUpdateWithWhereUniqueWithoutCreadoPorInput {
  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: false
  })
  where!: AvanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvanceUpdateWithoutCreadoPorInput, {
    nullable: false
  })
  data!: AvanceUpdateWithoutCreadoPorInput;
}
