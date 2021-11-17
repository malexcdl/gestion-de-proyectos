import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCreateManyProyectoInputEnvelope } from "../inputs/InscripcionCreateManyProyectoInputEnvelope";
import { InscripcionCreateOrConnectWithoutProyectoInput } from "../inputs/InscripcionCreateOrConnectWithoutProyectoInput";
import { InscripcionCreateWithoutProyectoInput } from "../inputs/InscripcionCreateWithoutProyectoInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.InputType("InscripcionCreateNestedManyWithoutProyectoInput", {
  isAbstract: true
})
export class InscripcionCreateNestedManyWithoutProyectoInput {
  @TypeGraphQL.Field(_type => [InscripcionCreateWithoutProyectoInput], {
    nullable: true
  })
  create?: InscripcionCreateWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionCreateOrConnectWithoutProyectoInput], {
    nullable: true
  })
  connectOrCreate?: InscripcionCreateOrConnectWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => InscripcionCreateManyProyectoInputEnvelope, {
    nullable: true
  })
  createMany?: InscripcionCreateManyProyectoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput], {
    nullable: true
  })
  connect?: InscripcionWhereUniqueInput[] | undefined;
}
