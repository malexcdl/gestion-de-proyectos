import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvanceUpdateInput } from "../../../inputs/AvanceUpdateInput";
import { AvanceWhereUniqueInput } from "../../../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAvanceArgs {
  @TypeGraphQL.Field(_type => AvanceUpdateInput, {
    nullable: false
  })
  data!: AvanceUpdateInput;

  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: false
  })
  where!: AvanceWhereUniqueInput;
}
