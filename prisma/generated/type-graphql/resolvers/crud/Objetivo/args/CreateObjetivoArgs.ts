import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoCreateInput } from "../../../inputs/ObjetivoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateObjetivoArgs {
  @TypeGraphQL.Field(_type => ObjetivoCreateInput, {
    nullable: false
  })
  data!: ObjetivoCreateInput;
}
