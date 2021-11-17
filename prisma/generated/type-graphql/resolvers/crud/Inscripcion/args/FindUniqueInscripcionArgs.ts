import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InscripcionWhereUniqueInput } from "../../../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueInscripcionArgs {
  @TypeGraphQL.Field(_type => InscripcionWhereUniqueInput, {
    nullable: false
  })
  where!: InscripcionWhereUniqueInput;
}
