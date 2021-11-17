import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InscripcionWhereInput } from "../../../inputs/InscripcionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInscripcionArgs {
  @TypeGraphQL.Field(_type => InscripcionWhereInput, {
    nullable: true
  })
  where?: InscripcionWhereInput | undefined;
}
