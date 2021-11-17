import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoWhereInput } from "../inputs/ObjetivoWhereInput";

@TypeGraphQL.InputType("ObjetivoListRelationFilter", {
  isAbstract: true
})
export class ObjetivoListRelationFilter {
  @TypeGraphQL.Field(_type => ObjetivoWhereInput, {
    nullable: true
  })
  every?: ObjetivoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ObjetivoWhereInput, {
    nullable: true
  })
  some?: ObjetivoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ObjetivoWhereInput, {
    nullable: true
  })
  none?: ObjetivoWhereInput | undefined;
}
