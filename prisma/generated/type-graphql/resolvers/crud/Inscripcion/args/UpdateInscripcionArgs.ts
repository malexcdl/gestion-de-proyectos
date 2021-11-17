import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InscripcionUpdateInput } from "../../../inputs/InscripcionUpdateInput";
import { InscripcionWhereUniqueInput } from "../../../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateInscripcionArgs {
  @TypeGraphQL.Field(_type => InscripcionUpdateInput, {
    nullable: false
  })
  data!: InscripcionUpdateInput;

  @TypeGraphQL.Field(_type => InscripcionWhereUniqueInput, {
    nullable: false
  })
  where!: InscripcionWhereUniqueInput;
}
