import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoCreateInput } from "../../../inputs/ObjetivoCreateInput";
import { ObjetivoUpdateInput } from "../../../inputs/ObjetivoUpdateInput";
import { ObjetivoWhereUniqueInput } from "../../../inputs/ObjetivoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertObjetivoArgs {
  @TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput, {
    nullable: false
  })
  where!: ObjetivoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ObjetivoCreateInput, {
    nullable: false
  })
  create!: ObjetivoCreateInput;

  @TypeGraphQL.Field(_type => ObjetivoUpdateInput, {
    nullable: false
  })
  update!: ObjetivoUpdateInput;
}
