import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateWithoutProyectoInput } from "../inputs/AvanceCreateWithoutProyectoInput";
import { AvanceUpdateWithoutProyectoInput } from "../inputs/AvanceUpdateWithoutProyectoInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceUpsertWithWhereUniqueWithoutProyectoInput", {
  isAbstract: true
})
export class AvanceUpsertWithWhereUniqueWithoutProyectoInput {
  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: false
  })
  where!: AvanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvanceUpdateWithoutProyectoInput, {
    nullable: false
  })
  update!: AvanceUpdateWithoutProyectoInput;

  @TypeGraphQL.Field(_type => AvanceCreateWithoutProyectoInput, {
    nullable: false
  })
  create!: AvanceCreateWithoutProyectoInput;
}
