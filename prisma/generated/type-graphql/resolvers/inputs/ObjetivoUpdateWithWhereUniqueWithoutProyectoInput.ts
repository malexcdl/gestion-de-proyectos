import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoUpdateWithoutProyectoInput } from "../inputs/ObjetivoUpdateWithoutProyectoInput";
import { ObjetivoWhereUniqueInput } from "../inputs/ObjetivoWhereUniqueInput";

@TypeGraphQL.InputType("ObjetivoUpdateWithWhereUniqueWithoutProyectoInput", {
  isAbstract: true
})
export class ObjetivoUpdateWithWhereUniqueWithoutProyectoInput {
  @TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput, {
    nullable: false
  })
  where!: ObjetivoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ObjetivoUpdateWithoutProyectoInput, {
    nullable: false
  })
  data!: ObjetivoUpdateWithoutProyectoInput;
}
