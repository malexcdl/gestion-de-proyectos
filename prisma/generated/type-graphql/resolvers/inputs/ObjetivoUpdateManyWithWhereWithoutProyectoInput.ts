import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoScalarWhereInput } from "../inputs/ObjetivoScalarWhereInput";
import { ObjetivoUpdateManyMutationInput } from "../inputs/ObjetivoUpdateManyMutationInput";

@TypeGraphQL.InputType("ObjetivoUpdateManyWithWhereWithoutProyectoInput", {
  isAbstract: true
})
export class ObjetivoUpdateManyWithWhereWithoutProyectoInput {
  @TypeGraphQL.Field(_type => ObjetivoScalarWhereInput, {
    nullable: false
  })
  where!: ObjetivoScalarWhereInput;

  @TypeGraphQL.Field(_type => ObjetivoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ObjetivoUpdateManyMutationInput;
}
