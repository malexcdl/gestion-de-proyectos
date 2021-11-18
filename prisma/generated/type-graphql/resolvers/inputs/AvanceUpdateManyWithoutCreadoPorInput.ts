import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateManyCreadoPorInputEnvelope } from "../inputs/AvanceCreateManyCreadoPorInputEnvelope";
import { AvanceCreateOrConnectWithoutCreadoPorInput } from "../inputs/AvanceCreateOrConnectWithoutCreadoPorInput";
import { AvanceCreateWithoutCreadoPorInput } from "../inputs/AvanceCreateWithoutCreadoPorInput";
import { AvanceScalarWhereInput } from "../inputs/AvanceScalarWhereInput";
import { AvanceUpdateManyWithWhereWithoutCreadoPorInput } from "../inputs/AvanceUpdateManyWithWhereWithoutCreadoPorInput";
import { AvanceUpdateWithWhereUniqueWithoutCreadoPorInput } from "../inputs/AvanceUpdateWithWhereUniqueWithoutCreadoPorInput";
import { AvanceUpsertWithWhereUniqueWithoutCreadoPorInput } from "../inputs/AvanceUpsertWithWhereUniqueWithoutCreadoPorInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceUpdateManyWithoutCreadoPorInput", {
  isAbstract: true
})
export class AvanceUpdateManyWithoutCreadoPorInput {
  @TypeGraphQL.Field(_type => [AvanceCreateWithoutCreadoPorInput], {
    nullable: true
  })
  create?: AvanceCreateWithoutCreadoPorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutCreadoPorInput], {
    nullable: true
  })
  connectOrCreate?: AvanceCreateOrConnectWithoutCreadoPorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceUpsertWithWhereUniqueWithoutCreadoPorInput], {
    nullable: true
  })
  upsert?: AvanceUpsertWithWhereUniqueWithoutCreadoPorInput[] | undefined;

  @TypeGraphQL.Field(_type => AvanceCreateManyCreadoPorInputEnvelope, {
    nullable: true
  })
  createMany?: AvanceCreateManyCreadoPorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AvanceWhereUniqueInput], {
    nullable: true
  })
  set?: AvanceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AvanceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceWhereUniqueInput], {
    nullable: true
  })
  delete?: AvanceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceWhereUniqueInput], {
    nullable: true
  })
  connect?: AvanceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceUpdateWithWhereUniqueWithoutCreadoPorInput], {
    nullable: true
  })
  update?: AvanceUpdateWithWhereUniqueWithoutCreadoPorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceUpdateManyWithWhereWithoutCreadoPorInput], {
    nullable: true
  })
  updateMany?: AvanceUpdateManyWithWhereWithoutCreadoPorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AvanceScalarWhereInput[] | undefined;
}
