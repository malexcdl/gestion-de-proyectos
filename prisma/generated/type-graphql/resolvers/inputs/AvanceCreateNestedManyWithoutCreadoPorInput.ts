import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateManyCreadoPorInputEnvelope } from "../inputs/AvanceCreateManyCreadoPorInputEnvelope";
import { AvanceCreateOrConnectWithoutCreadoPorInput } from "../inputs/AvanceCreateOrConnectWithoutCreadoPorInput";
import { AvanceCreateWithoutCreadoPorInput } from "../inputs/AvanceCreateWithoutCreadoPorInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceCreateNestedManyWithoutCreadoPorInput", {
  isAbstract: true
})
export class AvanceCreateNestedManyWithoutCreadoPorInput {
  @TypeGraphQL.Field(_type => [AvanceCreateWithoutCreadoPorInput], {
    nullable: true
  })
  create?: AvanceCreateWithoutCreadoPorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutCreadoPorInput], {
    nullable: true
  })
  connectOrCreate?: AvanceCreateOrConnectWithoutCreadoPorInput[] | undefined;

  @TypeGraphQL.Field(_type => AvanceCreateManyCreadoPorInputEnvelope, {
    nullable: true
  })
  createMany?: AvanceCreateManyCreadoPorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AvanceWhereUniqueInput], {
    nullable: true
  })
  connect?: AvanceWhereUniqueInput[] | undefined;
}
