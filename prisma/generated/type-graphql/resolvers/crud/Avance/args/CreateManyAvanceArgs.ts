import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvanceCreateManyInput } from "../../../inputs/AvanceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAvanceArgs {
  @TypeGraphQL.Field(_type => [AvanceCreateManyInput], {
    nullable: false
  })
  data!: AvanceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
