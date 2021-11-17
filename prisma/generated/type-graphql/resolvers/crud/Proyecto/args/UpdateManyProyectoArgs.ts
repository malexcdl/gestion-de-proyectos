import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProyectoUpdateManyMutationInput } from "../../../inputs/ProyectoUpdateManyMutationInput";
import { ProyectoWhereInput } from "../../../inputs/ProyectoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProyectoArgs {
  @TypeGraphQL.Field(_type => ProyectoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProyectoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProyectoWhereInput, {
    nullable: true
  })
  where?: ProyectoWhereInput | undefined;
}
