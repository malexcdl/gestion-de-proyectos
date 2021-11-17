import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoCreateWithoutProyectoInput } from "../inputs/ObjetivoCreateWithoutProyectoInput";
import { ObjetivoWhereUniqueInput } from "../inputs/ObjetivoWhereUniqueInput";

@TypeGraphQL.InputType("ObjetivoCreateOrConnectWithoutProyectoInput", {
  isAbstract: true
})
export class ObjetivoCreateOrConnectWithoutProyectoInput {
  @TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput, {
    nullable: false
  })
  where!: ObjetivoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ObjetivoCreateWithoutProyectoInput, {
    nullable: false
  })
  create!: ObjetivoCreateWithoutProyectoInput;
}
