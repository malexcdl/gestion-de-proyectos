import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoCreateManyInput } from "../../../inputs/ObjetivoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyObjetivoArgs {
  @TypeGraphQL.Field(_type => [ObjetivoCreateManyInput], {
    nullable: false
  })
  data!: ObjetivoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
