import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvanceCreateInput } from "../../../inputs/AvanceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAvanceArgs {
  @TypeGraphQL.Field(_type => AvanceCreateInput, {
    nullable: false
  })
  data!: AvanceCreateInput;
}
