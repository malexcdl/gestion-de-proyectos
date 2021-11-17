import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoWhereInput } from "../../../inputs/ObjetivoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyObjetivoArgs {
  @TypeGraphQL.Field(_type => ObjetivoWhereInput, {
    nullable: true
  })
  where?: ObjetivoWhereInput | undefined;
}
