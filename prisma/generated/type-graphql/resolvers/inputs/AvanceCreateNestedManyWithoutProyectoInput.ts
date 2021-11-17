import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateManyProyectoInputEnvelope } from "../inputs/AvanceCreateManyProyectoInputEnvelope";
import { AvanceCreateOrConnectWithoutProyectoInput } from "../inputs/AvanceCreateOrConnectWithoutProyectoInput";
import { AvanceCreateWithoutProyectoInput } from "../inputs/AvanceCreateWithoutProyectoInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceCreateNestedManyWithoutProyectoInput", {
  isAbstract: true
})
export class AvanceCreateNestedManyWithoutProyectoInput {
  @TypeGraphQL.Field(_type => [AvanceCreateWithoutProyectoInput], {
    nullable: true
  })
  create?: AvanceCreateWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceCreateOrConnectWithoutProyectoInput], {
    nullable: true
  })
  connectOrCreate?: AvanceCreateOrConnectWithoutProyectoInput[] | undefined;

  @TypeGraphQL.Field(_type => AvanceCreateManyProyectoInputEnvelope, {
    nullable: true
  })
  createMany?: AvanceCreateManyProyectoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AvanceWhereUniqueInput], {
    nullable: true
  })
  connect?: AvanceWhereUniqueInput[] | undefined;
}
