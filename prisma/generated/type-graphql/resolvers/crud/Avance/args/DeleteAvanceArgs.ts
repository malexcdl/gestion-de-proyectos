import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvanceWhereUniqueInput } from "../../../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAvanceArgs {
  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: false
  })
  where!: AvanceWhereUniqueInput;
}
