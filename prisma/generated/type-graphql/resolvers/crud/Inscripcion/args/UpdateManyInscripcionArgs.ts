import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InscripcionUpdateManyMutationInput } from "../../../inputs/InscripcionUpdateManyMutationInput";
import { InscripcionWhereInput } from "../../../inputs/InscripcionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInscripcionArgs {
  @TypeGraphQL.Field(_type => InscripcionUpdateManyMutationInput, {
    nullable: false
  })
  data!: InscripcionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InscripcionWhereInput, {
    nullable: true
  })
  where?: InscripcionWhereInput | undefined;
}
