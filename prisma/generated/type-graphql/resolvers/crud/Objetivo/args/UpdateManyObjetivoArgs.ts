import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoUpdateManyMutationInput } from "../../../inputs/ObjetivoUpdateManyMutationInput";
import { ObjetivoWhereInput } from "../../../inputs/ObjetivoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyObjetivoArgs {
  @TypeGraphQL.Field(_type => ObjetivoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ObjetivoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ObjetivoWhereInput, {
    nullable: true
  })
  where?: ObjetivoWhereInput | undefined;
}
