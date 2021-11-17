import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProyectoCreateInput } from "../../../inputs/ProyectoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProyectoArgs {
  @TypeGraphQL.Field(_type => ProyectoCreateInput, {
    nullable: false
  })
  data!: ProyectoCreateInput;
}
