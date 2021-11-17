import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCreateManyEstudianteInputEnvelope } from "../inputs/InscripcionCreateManyEstudianteInputEnvelope";
import { InscripcionCreateOrConnectWithoutEstudianteInput } from "../inputs/InscripcionCreateOrConnectWithoutEstudianteInput";
import { InscripcionCreateWithoutEstudianteInput } from "../inputs/InscripcionCreateWithoutEstudianteInput";
import { InscripcionScalarWhereInput } from "../inputs/InscripcionScalarWhereInput";
import { InscripcionUpdateManyWithWhereWithoutEstudianteInput } from "../inputs/InscripcionUpdateManyWithWhereWithoutEstudianteInput";
import { InscripcionUpdateWithWhereUniqueWithoutEstudianteInput } from "../inputs/InscripcionUpdateWithWhereUniqueWithoutEstudianteInput";
import { InscripcionUpsertWithWhereUniqueWithoutEstudianteInput } from "../inputs/InscripcionUpsertWithWhereUniqueWithoutEstudianteInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.InputType("InscripcionUpdateManyWithoutEstudianteInput", {
  isAbstract: true
})
export class InscripcionUpdateManyWithoutEstudianteInput {
  @TypeGraphQL.Field(_type => [InscripcionCreateWithoutEstudianteInput], {
    nullable: true
  })
  create?: InscripcionCreateWithoutEstudianteInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionCreateOrConnectWithoutEstudianteInput], {
    nullable: true
  })
  connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionUpsertWithWhereUniqueWithoutEstudianteInput], {
    nullable: true
  })
  upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[] | undefined;

  @TypeGraphQL.Field(_type => InscripcionCreateManyEstudianteInputEnvelope, {
    nullable: true
  })
  createMany?: InscripcionCreateManyEstudianteInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [InscripcionUpdateWithWhereUniqueWithoutEstudianteInput], {
    nullable: true
  })
  update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionUpdateManyWithWhereWithoutEstudianteInput], {
    nullable: true
  })
  updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InscripcionScalarWhereInput[] | undefined;
}
