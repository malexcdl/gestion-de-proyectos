import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceScalarWhereInput } from "../inputs/AvanceScalarWhereInput";
import { AvanceUpdateManyMutationInput } from "../inputs/AvanceUpdateManyMutationInput";

@TypeGraphQL.InputType("AvanceUpdateManyWithWhereWithoutCreadoPorInput", {
  isAbstract: true
})
export class AvanceUpdateManyWithWhereWithoutCreadoPorInput {
  @TypeGraphQL.Field(_type => AvanceScalarWhereInput, {
    nullable: false
  })
  where!: AvanceScalarWhereInput;

  @TypeGraphQL.Field(_type => AvanceUpdateManyMutationInput, {
    nullable: false
  })
  data!: AvanceUpdateManyMutationInput;
}
