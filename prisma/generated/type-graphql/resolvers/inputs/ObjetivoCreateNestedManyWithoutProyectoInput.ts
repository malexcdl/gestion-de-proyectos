import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoCreateManyProyectoInputEnvelope } from "../inputs/ObjetivoCreateManyProyectoInputEnvelope";
import { ObjetivoCreateOrConnectWithoutProyectoInput } from "../inputs/ObjetivoCreateOrConnectWithoutProyectoInput";
import { ObjetivoCreateWithoutProyectoInput } from "../inputs/ObjetivoCreateWithoutProyectoInput";
import { ObjetivoWhereUniqueInput } from "../inputs/ObjetivoWhereUniqueInput";

@TypeGraphQL.InputType("ObjetivoCreateNestedManyWithoutProyectoInput", {
  isAbstract: true
})
export class ObjetivoCreateNestedManyWithoutProyectoInput {
  @TypeGraphQL.Field(_type => [ObjetivoCreateWithoutProyectoInput], {
    nullable: true
  })
  create?: ObjetivoCreateWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoCreateOrConnectWithoutProyectoInput], {
    nullable: true
  })
  connectOrCreate?: ObjetivoCreateOrConnectWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => ObjetivoCreateManyProyectoInputEnvelope, {
    nullable: true
  })
  createMany?: ObjetivoCreateManyProyectoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoWhereUniqueInput], {
    nullable: true
  })
  connect?: ObjetivoWhereUniqueInput[] | undefined;
}
