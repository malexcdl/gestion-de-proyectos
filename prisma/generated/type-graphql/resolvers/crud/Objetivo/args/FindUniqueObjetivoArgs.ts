import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoWhereUniqueInput } from "../../../inputs/ObjetivoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueObjetivoArgs {
  @TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput, {
    nullable: false
  })
  where!: ObjetivoWhereUniqueInput;
}
