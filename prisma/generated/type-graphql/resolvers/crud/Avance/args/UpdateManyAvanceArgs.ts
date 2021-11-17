import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvanceUpdateManyMutationInput } from "../../../inputs/AvanceUpdateManyMutationInput";
import { AvanceWhereInput } from "../../../inputs/AvanceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAvanceArgs {
  @TypeGraphQL.Field(_type => AvanceUpdateManyMutationInput, {
    nullable: false
  })
  data!: AvanceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AvanceWhereInput, {
    nullable: true
  })
  where?: AvanceWhereInput | undefined;
}
