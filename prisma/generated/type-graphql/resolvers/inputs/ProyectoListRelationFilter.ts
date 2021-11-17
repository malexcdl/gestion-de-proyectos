import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoWhereInput } from "../inputs/ProyectoWhereInput";

@TypeGraphQL.InputType("ProyectoListRelationFilter", {
  isAbstract: true
})
export class ProyectoListRelationFilter {
  @TypeGraphQL.Field(_type => ProyectoWhereInput, {
    nullable: true
  })
  every?: ProyectoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoWhereInput, {
    nullable: true
  })
  some?: ProyectoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoWhereInput, {
    nullable: true
  })
  none?: ProyectoWhereInput | undefined;
}
