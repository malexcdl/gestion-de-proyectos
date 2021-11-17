import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InscripcionCreateInput } from "../../../inputs/InscripcionCreateInput";
import { InscripcionUpdateInput } from "../../../inputs/InscripcionUpdateInput";
import { InscripcionWhereUniqueInput } from "../../../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertInscripcionArgs {
  @TypeGraphQL.Field(_type => InscripcionWhereUniqueInput, {
    nullable: false
  })
  where!: InscripcionWhereUniqueInput;

  @TypeGraphQL.Field(_type => InscripcionCreateInput, {
    nullable: false
  })
  create!: InscripcionCreateInput;

  @TypeGraphQL.Field(_type => InscripcionUpdateInput, {
    nullable: false
  })
  update!: InscripcionUpdateInput;
}
