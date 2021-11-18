import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateManyProyectoInputEnvelope } from "../inputs/AvanceCreateManyProyectoInputEnvelope";
import { AvanceCreateOrConnectWithoutProyectoInput } from "../inputs/AvanceCreateOrConnectWithoutProyectoInput";
import { AvanceCreateWithoutProyectoInput } from "../inputs/AvanceCreateWithoutProyectoInput";
import { AvanceScalarWhereInput } from "../inputs/AvanceScalarWhereInput";
import { AvanceUpdateManyWithWhereWithoutProyectoInput } from "../inputs/AvanceUpdateManyWithWhereWithoutProyectoInput";
import { AvanceUpdateWithWhereUniqueWithoutProyectoInput } from "../inputs/AvanceUpdateWithWhereUniqueWithoutProyectoInput";
import { AvanceUpsertWithWhereUniqueWithoutProyectoInput } from "../inputs/AvanceUpsertWithWhereUniqueWithoutProyectoInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceUpdateManyWithoutProyectoInput", {
  isAbstract: true
})
export class AvanceUpdateManyWithoutProyectoInput {
  @TypeGraphQL.Field(_type => [AvanceCreateWithoutProyectoInput], {
    nullable: true
  })
  create?: AvanceCreateWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutProyectoInput], {
    nullable: true
  })
  connectOrCreate?: AvanceCreateOrConnectWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceUpsertWithWhereUniqueWithoutProyectoInput], {
    nullable: true
  })
  upsert?: AvanceUpsertWithWhereUniqueWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => AvanceCreateManyProyectoInputEnvelope, {
    nullable: true
  })
  createMany?: AvanceCreateManyProyectoInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AvanceUpdateWithWhereUniqueWithoutProyectoInput], {
    nullable: true
  })
  update?: AvanceUpdateWithWhereUniqueWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceUpdateManyWithWhereWithoutProyectoInput], {
    nullable: true
  })
  updateMany?: AvanceUpdateManyWithWhereWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AvanceScalarWhereInput[] | undefined;
}
