import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoCreateWithoutProyectoInput } from "../inputs/ObjetivoCreateWithoutProyectoInput";
import { ObjetivoUpdateWithoutProyectoInput } from "../inputs/ObjetivoUpdateWithoutProyectoInput";
import { ObjetivoWhereUniqueInput } from "../inputs/ObjetivoWhereUniqueInput";

@TypeGraphQL.InputType("ObjetivoUpsertWithWhereUniqueWithoutProyectoInput", {
  isAbstract: true
})
export class ObjetivoUpsertWithWhereUniqueWithoutProyectoInput {
  @TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput, {
    nullable: false
  })
  where!: ObjetivoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ObjetivoUpdateWithoutProyectoInput, {
    nullable: false
  })
  update!: ObjetivoUpdateWithoutProyectoInput;

  @TypeGraphQL.Field(_type => ObjetivoCreateWithoutProyectoInput, {
    nullable: false
  })
  create!: ObjetivoCreateWithoutProyectoInput;
}
