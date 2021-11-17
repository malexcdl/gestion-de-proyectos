import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InscripcionCreateManyInput } from "../../../inputs/InscripcionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInscripcionArgs {
  @TypeGraphQL.Field(_type => [InscripcionCreateManyInput], {
    nullable: false
  })
  data!: InscripcionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
