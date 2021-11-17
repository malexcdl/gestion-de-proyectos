import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProyectoWhereUniqueInput } from "../../../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProyectoArgs {
  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: false
  })
  where!: ProyectoWhereUniqueInput;
}
