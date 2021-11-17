import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProyectoWhereInput } from "../../../inputs/ProyectoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProyectoArgs {
  @TypeGraphQL.Field(_type => ProyectoWhereInput, {
    nullable: true
  })
  where?: ProyectoWhereInput | undefined;
}
