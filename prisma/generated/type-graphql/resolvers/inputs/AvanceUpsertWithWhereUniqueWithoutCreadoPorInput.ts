import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateWithoutCreadoPorInput } from "../inputs/AvanceCreateWithoutCreadoPorInput";
import { AvanceUpdateWithoutCreadoPorInput } from "../inputs/AvanceUpdateWithoutCreadoPorInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceUpsertWithWhereUniqueWithoutCreadoPorInput", {
  isAbstract: true
})
export class AvanceUpsertWithWhereUniqueWithoutCreadoPorInput {
  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: false
  })
  where!: AvanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvanceUpdateWithoutCreadoPorInput, {
    nullable: false
  })
  update!: AvanceUpdateWithoutCreadoPorInput;

  @TypeGraphQL.Field(_type => AvanceCreateWithoutCreadoPorInput, {
    nullable: false
  })
  create!: AvanceCreateWithoutCreadoPorInput;
}
