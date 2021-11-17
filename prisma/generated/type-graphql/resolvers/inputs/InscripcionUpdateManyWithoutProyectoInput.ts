import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCreateManyProyectoInputEnvelope } from "../inputs/InscripcionCreateManyProyectoInputEnvelope";
import { InscripcionCreateOrConnectWithoutProyectoInput } from "../inputs/InscripcionCreateOrConnectWithoutProyectoInput";
import { InscripcionCreateWithoutProyectoInput } from "../inputs/InscripcionCreateWithoutProyectoInput";
import { InscripcionScalarWhereInput } from "../inputs/InscripcionScalarWhereInput";
import { InscripcionUpdateManyWithWhereWithoutProyectoInput } from "../inputs/InscripcionUpdateManyWithWhereWithoutProyectoInput";
import { InscripcionUpdateWithWhereUniqueWithoutProyectoInput } from "../inputs/InscripcionUpdateWithWhereUniqueWithoutProyectoInput";
import { InscripcionUpsertWithWhereUniqueWithoutProyectoInput } from "../inputs/InscripcionUpsertWithWhereUniqueWithoutProyectoInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.InputType("InscripcionUpdateManyWithoutProyectoInput", {
  isAbstract: true
})
export class InscripcionUpdateManyWithoutProyectoInput {
  @TypeGraphQL.Field(_type => [InscripcionCreateWithoutProyectoInput], {
    nullable: true
  })
  create?: InscripcionCreateWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionCreateOrConnectWithoutProyectoInput], {
    nullable: true
  })
  connectOrCreate?: InscripcionCreateOrConnectWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionUpsertWithWhereUniqueWithoutProyectoInput], {
    nullable: true
  })
  upsert?: InscripcionUpsertWithWhereUniqueWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => InscripcionCreateManyProyectoInputEnvelope, {
    nullable: true
  })
  createMany?: InscripcionCreateManyProyectoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput], {
    nullable: true
  })
  connect?: InscripcionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput], {
    nullable: true
  })
  set?: InscripcionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: InscripcionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput], {
    nullable: true
  })
  delete?: InscripcionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionUpdateWithWhereUniqueWithoutProyectoInput], {
    nullable: true
  })
  update?: InscripcionUpdateWithWhereUniqueWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionUpdateManyWithWhereWithoutProyectoInput], {
    nullable: true
  })
  updateMany?: InscripcionUpdateManyWithWhereWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InscripcionScalarWhereInput[] | undefined;
}
