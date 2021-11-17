import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProyectoUpdateInput } from "../../../inputs/ProyectoUpdateInput";
import { ProyectoWhereUniqueInput } from "../../../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProyectoArgs {
  @TypeGraphQL.Field(_type => ProyectoUpdateInput, {
    nullable: false
  })
  data!: ProyectoUpdateInput;

  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: false
  })
  where!: ProyectoWhereUniqueInput;
}
