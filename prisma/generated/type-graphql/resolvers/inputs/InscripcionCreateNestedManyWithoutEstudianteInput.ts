import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCreateManyEstudianteInputEnvelope } from "../inputs/InscripcionCreateManyEstudianteInputEnvelope";
import { InscripcionCreateOrConnectWithoutEstudianteInput } from "../inputs/InscripcionCreateOrConnectWithoutEstudianteInput";
import { InscripcionCreateWithoutEstudianteInput } from "../inputs/InscripcionCreateWithoutEstudianteInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.InputType("InscripcionCreateNestedManyWithoutEstudianteInput", {
  isAbstract: true
})
export class InscripcionCreateNestedManyWithoutEstudianteInput {
  @TypeGraphQL.Field(_type => [InscripcionCreateWithoutEstudianteInput], {
    nullable: true
  })
  create?: InscripcionCreateWithoutEstudianteInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionCreateOrConnectWithoutEstudianteInput], {
    nullable: true
  })
  connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput[] | undefined;

  @TypeGraphQL.Field(_type => InscripcionCreateManyEstudianteInputEnvelope, {
    nullable: true
  })
  createMany?: InscripcionCreateManyEstudianteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput], {
    nullable: true
  })
  connect?: InscripcionWhereUniqueInput[] | undefined;
}
