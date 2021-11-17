import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoUpdateInput } from "../../../inputs/ObjetivoUpdateInput";
import { ObjetivoWhereUniqueInput } from "../../../inputs/ObjetivoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateObjetivoArgs {
  @TypeGraphQL.Field(_type => ObjetivoUpdateInput, {
    nullable: false
  })
  data!: ObjetivoUpdateInput;

  @TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput, {
    nullable: false
  })
  where!: ObjetivoWhereUniqueInput;
}
