import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateManyLiderInputEnvelope } from "../inputs/ProyectoCreateManyLiderInputEnvelope";
import { ProyectoCreateOrConnectWithoutLiderInput } from "../inputs/ProyectoCreateOrConnectWithoutLiderInput";
import { ProyectoCreateWithoutLiderInput } from "../inputs/ProyectoCreateWithoutLiderInput";
import { ProyectoScalarWhereInput } from "../inputs/ProyectoScalarWhereInput";
import { ProyectoUpdateManyWithWhereWithoutLiderInput } from "../inputs/ProyectoUpdateManyWithWhereWithoutLiderInput";
import { ProyectoUpdateWithWhereUniqueWithoutLiderInput } from "../inputs/ProyectoUpdateWithWhereUniqueWithoutLiderInput";
import { ProyectoUpsertWithWhereUniqueWithoutLiderInput } from "../inputs/ProyectoUpsertWithWhereUniqueWithoutLiderInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoUpdateManyWithoutLiderInput", {
  isAbstract: true
})
export class ProyectoUpdateManyWithoutLiderInput {
  @TypeGraphQL.Field(_type => [ProyectoCreateWithoutLiderInput], {
    nullable: true
  })
  create?: ProyectoCreateWithoutLiderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoCreateOrConnectWithoutLiderInput], {
    nullable: true
  })
  connectOrCreate?: ProyectoCreateOrConnectWithoutLiderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoUpsertWithWhereUniqueWithoutLiderInput], {
    nullable: true
  })
  upsert?: ProyectoUpsertWithWhereUniqueWithoutLiderInput[] | undefined;

  @TypeGraphQL.Field(_type => ProyectoCreateManyLiderInputEnvelope, {
    nullable: true
  })
  createMany?: ProyectoCreateManyLiderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProyectoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput], {
    nullable: true
  })
  set?: ProyectoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProyectoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput], {
    nullable: true
  })
  delete?: ProyectoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoUpdateWithWhereUniqueWithoutLiderInput], {
    nullable: true
  })
  update?: ProyectoUpdateWithWhereUniqueWithoutLiderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoUpdateManyWithWhereWithoutLiderInput], {
    nullable: true
  })
  updateMany?: ProyectoUpdateManyWithWhereWithoutLiderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProyectoScalarWhereInput[] | undefined;
}
