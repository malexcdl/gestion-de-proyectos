import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvanceWhereInput } from "../../../inputs/AvanceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAvanceArgs {
  @TypeGraphQL.Field(_type => AvanceWhereInput, {
    nullable: true
  })
  where?: AvanceWhereInput | undefined;
}
