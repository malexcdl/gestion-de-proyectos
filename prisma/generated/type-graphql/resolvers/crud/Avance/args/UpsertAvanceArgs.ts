import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvanceCreateInput } from "../../../inputs/AvanceCreateInput";
import { AvanceUpdateInput } from "../../../inputs/AvanceUpdateInput";
import { AvanceWhereUniqueInput } from "../../../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAvanceArgs {
  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: false
  })
  where!: AvanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvanceCreateInput, {
    nullable: false
  })
  create!: AvanceCreateInput;

  @TypeGraphQL.Field(_type => AvanceUpdateInput, {
    nullable: false
  })
  update!: AvanceUpdateInput;
}
