import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InscripcionCreateInput } from "../../../inputs/InscripcionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateInscripcionArgs {
  @TypeGraphQL.Field(_type => InscripcionCreateInput, {
    nullable: false
  })
  data!: InscripcionCreateInput;
}
