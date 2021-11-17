import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProyectoCreateInput } from "../../../inputs/ProyectoCreateInput";
import { ProyectoUpdateInput } from "../../../inputs/ProyectoUpdateInput";
import { ProyectoWhereUniqueInput } from "../../../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProyectoArgs {
  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: false
  })
  where!: ProyectoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProyectoCreateInput, {
    nullable: false
  })
  create!: ProyectoCreateInput;

  @TypeGraphQL.Field(_type => ProyectoUpdateInput, {
    nullable: false
  })
  update!: ProyectoUpdateInput;
}
