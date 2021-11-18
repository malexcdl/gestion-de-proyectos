import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoCreateManyProyectoInputEnvelope } from "../inputs/ObjetivoCreateManyProyectoInputEnvelope";
import { ObjetivoCreateOrConnectWithoutProyectoInput } from "../inputs/ObjetivoCreateOrConnectWithoutProyectoInput";
import { ObjetivoCreateWithoutProyectoInput } from "../inputs/ObjetivoCreateWithoutProyectoInput";
import { ObjetivoScalarWhereInput } from "../inputs/ObjetivoScalarWhereInput";
import { ObjetivoUpdateManyWithWhereWithoutProyectoInput } from "../inputs/ObjetivoUpdateManyWithWhereWithoutProyectoInput";
import { ObjetivoUpdateWithWhereUniqueWithoutProyectoInput } from "../inputs/ObjetivoUpdateWithWhereUniqueWithoutProyectoInput";
import { ObjetivoUpsertWithWhereUniqueWithoutProyectoInput } from "../inputs/ObjetivoUpsertWithWhereUniqueWithoutProyectoInput";
import { ObjetivoWhereUniqueInput } from "../inputs/ObjetivoWhereUniqueInput";

@TypeGraphQL.InputType("ObjetivoUpdateManyWithoutProyectoInput", {
  isAbstract: true
})
export class ObjetivoUpdateManyWithoutProyectoInput {
  @TypeGraphQL.Field(_type => [ObjetivoCreateWithoutProyectoInput], {
    nullable: true
  })
  create?: ObjetivoCreateWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoCreateOrConnectWithoutProyectoInput], {
    nullable: true
  })
  connectOrCreate?: ObjetivoCreateOrConnectWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoUpsertWithWhereUniqueWithoutProyectoInput], {
    nullable: true
  })
  upsert?: ObjetivoUpsertWithWhereUniqueWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => ObjetivoCreateManyProyectoInputEnvelope, {
    nullable: true
  })
  createMany?: ObjetivoCreateManyProyectoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput], {
    nullable: true
  })
  set?: ObjetivoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ObjetivoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput], {
    nullable: true
  })
  delete?: ObjetivoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput], {
    nullable: true
  })
  connect?: ObjetivoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoUpdateWithWhereUniqueWithoutProyectoInput], {
    nullable: true
  })
  update?: ObjetivoUpdateWithWhereUniqueWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoUpdateManyWithWhereWithoutProyectoInput], {
    nullable: true
  })
  updateMany?: ObjetivoUpdateManyWithWhereWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ObjetivoScalarWhereInput[] | undefined;
}
